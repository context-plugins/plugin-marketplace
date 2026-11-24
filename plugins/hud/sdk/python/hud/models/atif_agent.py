from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AtifAgent(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    version: str
    model_name: Optional[str] = UNSET
    tool_definitions: Optional[list[Any]] = UNSET
    extra: Optional[Any] = UNSET


class AtifAgentDict(TypedDict):
    name: str
    version: str
    model_name: NotRequired[str]
    tool_definitions: NotRequired[list[Any]]
    extra: NotRequired[Any]
