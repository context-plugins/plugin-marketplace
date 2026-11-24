from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status import StatusOrStr


class Account(SdkBaseModel):
    status: StatusOrStr
    suspension_reason: str | None
    test: bool | None


class AccountDict(TypedDict):
    status: StatusOrStr
    suspension_reason: str | None
    test: bool | None
