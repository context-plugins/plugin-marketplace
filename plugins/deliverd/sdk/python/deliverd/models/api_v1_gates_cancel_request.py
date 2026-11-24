from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agent_deliverd_dev_gates_api import AgentDeliverdDevGatesApi, AgentDeliverdDevGatesApiDict


class ApiV1GatesCancelRequest(SdkBaseModel):
    note: Optional[str] = UNSET
    """Why, for the record"""

    agent: Optional[AgentDeliverdDevGatesApi] = UNSET
    """Who you are, when you ask through a person's connection. Registered on first sight and bound to that person. An
    agent key already says who it is"""


class ApiV1GatesCancelRequestDict(TypedDict):
    note: NotRequired[str]
    agent: NotRequired[AgentDeliverdDevGatesApiDict]
