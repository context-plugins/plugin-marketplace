from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cause import Cause, CauseDict
from .stack_trace import StackTrace, StackTraceDict
from .suppressed import Suppressed, SuppressedDict


class OAuthClientException(SdkBaseModel):
    cause: Optional[Cause] = UNSET
    stack_trace: Optional[list[StackTrace]] = Field(default=UNSET, alias="stackTrace")
    message: Optional[str] = UNSET
    suppressed: Optional[list[Suppressed]] = UNSET
    localized_message: Optional[str] = Field(default=UNSET, alias="localizedMessage")


class OAuthClientExceptionDict(TypedDict):
    cause: NotRequired[CauseDict]
    stack_trace: NotRequired[list[StackTraceDict]]
    message: NotRequired[str]
    suppressed: NotRequired[list[SuppressedDict]]
    localized_message: NotRequired[str]
