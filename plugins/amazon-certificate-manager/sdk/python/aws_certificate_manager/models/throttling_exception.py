from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .throttling_reason import ThrottlingReason, ThrottlingReasonDict


class ThrottlingException(SdkBaseModel):
    message: Optional[str] = UNSET
    throttling_reasons: Optional[list[ThrottlingReason]] = Field(default=UNSET, alias="throttlingReasons")
    """One or more reasons why the request was throttled."""


class ThrottlingExceptionDict(TypedDict):
    message: NotRequired[str]
    throttling_reasons: NotRequired[list[ThrottlingReasonDict]]
