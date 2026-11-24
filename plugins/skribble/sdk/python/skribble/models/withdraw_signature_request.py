from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WithdrawSignatureRequest(SdkBaseModel):
    message: Optional[str] = UNSET
    """Withdraw message."""


class WithdrawSignatureRequestDict(TypedDict):
    message: NotRequired[str]
