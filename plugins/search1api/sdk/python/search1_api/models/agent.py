from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Agent(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: Optional[str] = UNSET
    model: Optional[str] = UNSET


class AgentDict(TypedDict):
    name: NotRequired[str]
    model: NotRequired[str]
