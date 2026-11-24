from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_type_money8 import GoogleTypeMoney8, GoogleTypeMoney8Dict


class GoogleCloudApigeeV1DeveloperBalanceWallet(SdkBaseModel):
    """Wallet used to manage an account balance for a particular currency."""

    last_credit_time: Optional[str] = Field(default=UNSET, alias="lastCreditTime")
    """Output only. Time at which the developer last added credit to the account in milliseconds since epoch."""

    balance: Optional[GoogleTypeMoney8] = UNSET
    """Current remaining balance of the developer for a particular currency."""


class GoogleCloudApigeeV1DeveloperBalanceWalletDict(TypedDict):
    last_credit_time: NotRequired[str]
    balance: NotRequired[GoogleTypeMoney8Dict]
