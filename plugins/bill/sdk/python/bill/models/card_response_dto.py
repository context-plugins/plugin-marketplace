from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .current_period_bill_v3_cards_api import CurrentPeriodBillV3CardsApi, CurrentPeriodBillV3CardsApiDict
from .enums.card_status import CardStatusOrStr
from .enums.card_type import CardTypeOrStr
from .enums.deleted_reason_type import DeletedReasonTypeOrStr


class CardResponseDto(SdkBaseModel):
    """Cards response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the card"""

    uuid: Optional[str] = UNSET
    """BILL-generated UUID of the card"""

    name: Optional[str] = UNSET
    """Card name"""

    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    """BILL-generated ID of the user linked with the card"""

    user_uuid: Optional[str] = Field(default=UNSET, alias="userUuid")
    """BILL-generated UUID of the user linked with the card"""

    budget_id: Optional[str] = Field(default=UNSET, alias="budgetId")
    """BILL-generated ID of the budget linked with the card"""

    budget_uuid: Optional[str] = Field(default=UNSET, alias="budgetUuid")
    """BILL-generated UUID of the budget linked with the card"""

    last_four: Optional[str] = Field(default=UNSET, alias="lastFour")
    """Last four digits of the card number"""

    valid_thru: Optional[str] = Field(default=UNSET, alias="validThru")
    """BILL-generated card expiration date. The value is in the ``MM/YY`` format.

    **Note**: Use the ``validThru`` value as the expiration date in a card payment. Do not use the ``expirationDate``
    value for this operation."""

    expiration_date: Optional[Date] = Field(default=UNSET, alias="expirationDate")
    """User-generated card expiration date. This value is in the ``yyyy-MM-dd`` format. BILL automatically closes the
    card account on this date.

    **Note**: Use the ``validThru`` value as the expiration date in a card payment. Do not use the ``expirationDate``
    value for this operation."""

    status: Optional[CardStatusOrStr] = UNSET
    deleted_reason: Optional[DeletedReasonTypeOrStr] = Field(default=UNSET, alias="deletedReason")
    type_: Optional[CardTypeOrStr] = Field(default=UNSET, alias="type")
    share_budget_funds: Optional[bool] = Field(default=UNSET, alias="shareBudgetFunds")
    """Set as ``true`` to share all the budget funds with the card. This option enables the card user to spend from
    unallocated budget funds when the allocation is empty."""

    recurring: Optional[bool] = UNSET
    """Set as ``true`` to renew the card funds in the next budget period"""

    recurring_limit: Optional[float] = Field(default=UNSET, alias="recurringLimit")
    """Card spend limit for the all future budget periods"""

    current_period: Optional[CurrentPeriodBillV3CardsApi] = Field(default=UNSET, alias="currentPeriod")
    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""


class CardResponseDtoDict(TypedDict):
    id: NotRequired[str]
    uuid: NotRequired[str]
    name: NotRequired[str]
    user_id: NotRequired[str]
    user_uuid: NotRequired[str]
    budget_id: NotRequired[str]
    budget_uuid: NotRequired[str]
    last_four: NotRequired[str]
    valid_thru: NotRequired[str]
    expiration_date: NotRequired[Date]
    status: NotRequired[CardStatusOrStr]
    deleted_reason: NotRequired[DeletedReasonTypeOrStr]
    type_: NotRequired[CardTypeOrStr]
    share_budget_funds: NotRequired[bool]
    recurring: NotRequired[bool]
    recurring_limit: NotRequired[float]
    current_period: NotRequired[CurrentPeriodBillV3CardsApiDict]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
