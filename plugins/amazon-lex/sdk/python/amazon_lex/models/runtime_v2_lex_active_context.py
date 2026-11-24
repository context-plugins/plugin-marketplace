from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .active_context_time_to_live import ActiveContextTimeToLive, ActiveContextTimeToLiveDict


class RuntimeV2LexActiveContext(SdkBaseModel):
    name: str
    """The name of the context."""

    time_to_live: ActiveContextTimeToLive = Field(alias="timeToLive")
    context_attributes: dict[str, str] = Field(alias="contextAttributes")
    """A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by
    including the context in the request. If you don't specify a list of contexts, Amazon Lex V2 will use the current
    list of contexts for the session. If you specify an empty list, all contexts for the session are cleared."""


class RuntimeV2LexActiveContextDict(TypedDict):
    name: str
    time_to_live: ActiveContextTimeToLiveDict
    context_attributes: dict[str, str]
