from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .runtime_lex_active_context_time_to_live import (
    RuntimeLexActiveContextTimeToLive,
    RuntimeLexActiveContextTimeToLiveDict,
)


class RuntimeLexActiveContext(SdkBaseModel):
    name: str
    """The name of the context."""

    time_to_live: RuntimeLexActiveContextTimeToLive = Field(alias="timeToLive")
    parameters: dict[str, str]
    """State variables for the current context. You can use these values as default values for slots in subsequent
    events."""


class RuntimeLexActiveContextDict(TypedDict):
    name: str
    time_to_live: RuntimeLexActiveContextTimeToLiveDict
    parameters: dict[str, str]
