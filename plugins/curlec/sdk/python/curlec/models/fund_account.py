from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FundAccount(SdkBaseModel):
    id: Optional[str] = UNSET
    account_type: Optional[str] = UNSET
    bank_account: Optional[Any] = UNSET
    vpa: Optional[Any] = UNSET


class FundAccountDict(TypedDict):
    id: NotRequired[str]
    account_type: NotRequired[str]
    bank_account: NotRequired[Any]
    vpa: NotRequired[Any]
