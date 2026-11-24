from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AccountSuspendedException(SdkBaseModel):
    message: Optional[str] = UNSET


class AccountSuspendedExceptionDict(TypedDict):
    message: NotRequired[str]
