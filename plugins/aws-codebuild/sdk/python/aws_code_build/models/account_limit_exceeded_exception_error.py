from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AccountLimitExceededExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class AccountLimitExceededExceptionErrorDict(TypedDict):
    message: NotRequired[str]
