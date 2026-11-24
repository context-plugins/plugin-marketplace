from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_type_money7 import GoogleTypeMoney7, GoogleTypeMoney7Dict


class GoogleCloudApigeeV1CreditDeveloperBalanceRequest(SdkBaseModel):
    """Request for CreditDeveloperBalance."""

    transaction_amount: Optional[GoogleTypeMoney7] = Field(default=UNSET, alias="transactionAmount")
    """The amount of money to be credited. The wallet corresponding to the currency specified within
    ``transaction_amount`` will be updated. For example, if you specified ``currency_code`` within
    ``transaction_amount`` as "USD", then the amount would be added to the wallet which has the "USD" currency or if no
    such wallet exists, a new wallet will be created with the "USD" currency."""

    transaction_id: Optional[str] = Field(default=UNSET, alias="transactionId")
    """Each transaction_id uniquely identifies a credit balance request. If multiple requests are received with the same
    transaction_id, only one of them will be considered."""


class GoogleCloudApigeeV1CreditDeveloperBalanceRequestDict(TypedDict):
    transaction_amount: NotRequired[GoogleTypeMoney7Dict]
    transaction_id: NotRequired[str]
