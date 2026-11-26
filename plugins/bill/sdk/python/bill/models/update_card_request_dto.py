from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, OptionalNullable, SdkBaseModel


class UpdateCardRequestDto(SdkBaseModel):
    """Update a virtual charge card (limit updated)"""

    name: OptionalNullable[str] = UNSET
    """Card name"""

    budget_id: OptionalNullable[str] = Field(default=UNSET, alias="budgetId")
    """BILL-generated ID or UUID of the budget linked with the card"""

    available_funds: OptionalNullable[float] = Field(default=UNSET, alias="availableFunds")
    """Card spend limit for the current budget period"""

    recurring_limit: OptionalNullable[float] = Field(default=UNSET, alias="recurringLimit")
    """Card spend limit for all future budget periods"""

    expiration_date: OptionalNullable[Date] = Field(default=UNSET, alias="expirationDate")
    """User-generated expiration date. The value is in the ``yyyy-MM-dd`` format. BILL automatically closes the card
    account on this date. To remove the card expiration date, set this field as ``null``.

    **Note**: Use the ``validThru`` value in the response as the expiration date in a card payment. Do not use the
    ``expirationDate`` value for this operation."""

    share_budget_funds: OptionalNullable[bool] = Field(default=UNSET, alias="shareBudgetFunds")
    """Set as ``true`` to share all the budget funds with the card. This option enables the card user to spend from
    unallocated budget funds when the allocation is empty."""

    recurring: OptionalNullable[bool] = UNSET
    """Card policy for recurring budget periods.
    * ``true``: Renew the card funds in the next budget period
    * ``false``: Card is available only for the current budget period

    If you do not set this field, the card will retain its current policy."""


class UpdateCardRequestDtoDict(TypedDict):
    name: NotRequired[str | None]
    budget_id: NotRequired[str | None]
    available_funds: NotRequired[float | None]
    recurring_limit: NotRequired[float | None]
    expiration_date: NotRequired[Date | None]
    share_budget_funds: NotRequired[bool | None]
    recurring: NotRequired[bool | None]
