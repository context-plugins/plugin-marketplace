from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_type_money3 import GoogleTypeMoney3, GoogleTypeMoney3Dict


class GoogleCloudApigeeV1AppGroupBalanceWallet(SdkBaseModel):
    """Wallet used to manage an account balance for a particular currency."""

    last_credit_time: Optional[str] = Field(default=UNSET, alias="lastCreditTime")
    """Output only. Time at which the AppGroup last added credit to the account in milliseconds since epoch."""

    balance: Optional[GoogleTypeMoney3] = UNSET
    """Current remaining balance of the AppGroup for a particular currency."""


class GoogleCloudApigeeV1AppGroupBalanceWalletDict(TypedDict):
    last_credit_time: NotRequired[str]
    balance: NotRequired[GoogleTypeMoney3Dict]
