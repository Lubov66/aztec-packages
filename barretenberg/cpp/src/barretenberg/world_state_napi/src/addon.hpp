#pragma once

#include "barretenberg/messaging/dispatcher.hpp"
#include "barretenberg/world_state/world_state.hpp"
#include <cstdint>
#include <memory>
#include <napi.h>

namespace bb::world_state {

class WorldStateAddon : public Napi::ObjectWrap<WorldStateAddon> {
  public:
    WorldStateAddon(const Napi::CallbackInfo&);
    Napi::Value process(const Napi::CallbackInfo&);

    static Napi::Function get_class(Napi::Env);

  private:
    std::unique_ptr<bb::world_state::WorldState> _ws;
    bb::messaging::MessageDispatcher _dispatcher;
    uint32_t _msg_id = 0;

    bool get_tree_info(msgpack::object& obj, msgpack::sbuffer& buffer);
    bool append_leaves(msgpack::object& obj, msgpack::sbuffer& buffer);

    uint32_t next_msg_id();
};

} // namespace bb::world_state