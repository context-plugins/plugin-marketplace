from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ThreeDsChallenge(SdkBaseModel):
    merchant_name: Optional[str] = Field(default=UNSET, alias="merchantName")
    merchant_category_code: Optional[str] = Field(default=UNSET, alias="merchantCategoryCode")
    acs_transaction_id: Optional[str] = Field(default=UNSET, alias="acsTransactionId")
    user_uuid: Optional[str] = Field(default=UNSET, alias="userUuid")
    occurred_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="occurredTime")
    amount: Optional[float] = UNSET
    card_uuid: Optional[str] = Field(default=UNSET, alias="cardUuid")
    company_uuid: Optional[str] = Field(default=UNSET, alias="companyUuid")
    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")


class ThreeDsChallengeDict(TypedDict):
    merchant_name: NotRequired[str]
    merchant_category_code: NotRequired[str]
    acs_transaction_id: NotRequired[str]
    user_uuid: NotRequired[str]
    occurred_time: NotRequired[RFC3339DateTime]
    amount: NotRequired[float]
    card_uuid: NotRequired[str]
    company_uuid: NotRequired[str]
    currency_code: NotRequired[str]
