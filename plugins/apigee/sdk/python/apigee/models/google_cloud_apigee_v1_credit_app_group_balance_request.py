from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_type_money2 import GoogleTypeMoney2, GoogleTypeMoney2Dict


class GoogleCloudApigeeV1CreditAppGroupBalanceRequest(SdkBaseModel):
    """Request for CreditAppGroupBalance."""

    transaction_amount: Optional[GoogleTypeMoney2] = Field(default=UNSET, alias="transactionAmount")
    """Required. The amount of money to be credited. The wallet corresponding to the currency specified within
    ``transaction_amount`` will be updated. For example, if you specified ``currency_code`` within
    ``transaction_amount`` as "USD", then the amount would be added to the wallet which has the "USD" currency or if no
    such wallet exists, a new wallet will be created with the "USD" currency."""

    transaction_id: Optional[str] = Field(default=UNSET, alias="transactionId")
    """Required. Each transaction_id uniquely identifies a credit balance request. If multiple requests are received
    with the same transaction_id, only one of them will be considered."""


class GoogleCloudApigeeV1CreditAppGroupBalanceRequestDict(TypedDict):
    transaction_amount: NotRequired[GoogleTypeMoney2Dict]
    transaction_id: NotRequired[str]
