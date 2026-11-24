from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AccountLimitExceededException(SdkBaseModel):
    message: Optional[str] = UNSET


class AccountLimitExceededExceptionDict(TypedDict):
    message: NotRequired[str]
