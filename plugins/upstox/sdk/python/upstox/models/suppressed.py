from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stack_trace import StackTrace, StackTraceDict


class Suppressed(SdkBaseModel):
    stack_trace: Optional[list[StackTrace]] = Field(default=UNSET, alias="stackTrace")
    message: Optional[str] = UNSET
    localized_message: Optional[str] = Field(default=UNSET, alias="localizedMessage")


class SuppressedDict(TypedDict):
    stack_trace: NotRequired[list[StackTraceDict]]
    message: NotRequired[str]
    localized_message: NotRequired[str]
