from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiLimitExceededExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class ApiLimitExceededExceptionErrorDict(TypedDict):
    message: NotRequired[str]
