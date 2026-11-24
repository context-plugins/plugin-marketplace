from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AtifToolCall(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    tool_call_id: str
    function_name: str
    arguments: Any
    extra: Optional[Any] = UNSET


class AtifToolCallDict(TypedDict):
    tool_call_id: str
    function_name: str
    arguments: Any
    extra: NotRequired[Any]
