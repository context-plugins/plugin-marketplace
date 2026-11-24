from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .choice_delta_tool_call_function import ChoiceDeltaToolCallFunction, ChoiceDeltaToolCallFunctionDict
from .enums.type import TypeOrStr


class ChoiceDeltaToolCall(SdkBaseModel):
    index: int
    id: Optional[str] = UNSET
    function: Optional[ChoiceDeltaToolCallFunction] = UNSET
    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")


class ChoiceDeltaToolCallDict(TypedDict):
    index: int
    id: NotRequired[str]
    function: NotRequired[ChoiceDeltaToolCallFunctionDict]
    type_: NotRequired[TypeOrStr]
