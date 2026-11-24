from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AccountSuspendedExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class AccountSuspendedExceptionErrorDict(TypedDict):
    message: NotRequired[str]
