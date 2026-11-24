from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, OptionalNullable, SdkBaseModel


class CreateCardRequestDto(SdkBaseModel):
    """Create a virtual charge card"""

    name: str
    """Card name"""

    user_id: str = Field(alias="userId")
    """BILL-generated ID or UUID of the user linked with the card"""

    budget_id: str = Field(alias="budgetId")
    """BILL-generated ID or UUID of the budget linked with the card"""

    limit: OptionalNullable[float] = UNSET
    """Card spend limit for the current budget period"""

    recurring_limit: OptionalNullable[float] = Field(default=UNSET, alias="recurringLimit")
    """Card spend limit for all future budget periods"""

    expiration_date: OptionalNullable[Date] = Field(default=UNSET, alias="expirationDate")
    """User-generated expiration date. The value is in the ``yyyy-MM-dd`` format. BILL automatically closes the card
    account on this date.

    **Note**: Use the ``validThru`` value in the response as the expiration date in a card payment. Do not use the
    ``expirationDate`` value for this operation."""

    share_budget_funds: OptionalNullable[bool] = Field(default=UNSET, alias="shareBudgetFunds")
    """Set as ``true`` to share all the budget funds with the card. This option enables the card user to spend from
    unallocated budget funds when the allocation is empty."""


class CreateCardRequestDtoDict(TypedDict):
    name: str
    user_id: str
    budget_id: str
    limit: NotRequired[float | None]
    recurring_limit: NotRequired[float | None]
    expiration_date: NotRequired[Date | None]
    share_budget_funds: NotRequired[bool | None]
