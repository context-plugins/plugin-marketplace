from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, SdkBaseModel
from .enums.edit_budget_share_funds_type import EditBudgetShareFundsTypeOrStr
from .enums.period_interval_type import PeriodIntervalTypeOrStr


class BudgetUpdateDto(SdkBaseModel):
    """Update a budget (limit updated)"""

    name: Optional[str] = UNSET
    """Budget name"""

    description: Optional[str] = UNSET
    """Budget description"""

    expiration_date: OptionalNullable[Date] = Field(default=UNSET, alias="expirationDate")
    """Budget expiration date. This value is in the ``yyyy-MM-dd`` format."""

    recurring_interval: Optional[PeriodIntervalTypeOrStr] = Field(default=UNSET, alias="recurringInterval")
    recur_month: Optional[int] = Field(default=UNSET, alias="recurMonth")
    """The month in which the budget will recur. Set this field only when ``recurringInterval`` is set as ``QUARTERLY``
    or ``YEARLY``. The default value is the current month."""

    timezone: Optional[str] = UNSET
    """Timezone in which the budget funds are reset. The default value is the timezone of the company's billing address.

    Set this field in the ``US/{time_zone}`` format. For example, ``US/Pacific`` or ``US/Mountain``."""

    auto_add_users: Optional[bool] = Field(default=UNSET, alias="autoAddUsers")
    """Set as ``true`` to automatically add all new users to this budget"""

    receipt_required: Optional[bool] = Field(default=UNSET, alias="receiptRequired")
    """Set as ``true`` if a receipt is required for transactions in the budget"""

    max_tx_size: Optional[float] = Field(default=UNSET, alias="maxTxSize")
    """Maximum transaction size in the budget. Any single transaction for an amount greater than ``maxTxSize`` will be
    declined."""

    carry_over: Optional[bool] = Field(default=UNSET, alias="carryOver")
    """Set as ``true`` for any budget funds assigned to users and vendor cards to carry over from one budget period to
    the next. The budget period is set with ``recurringInterval``."""

    limitless_overspend: Optional[bool] = Field(default=UNSET, alias="limitlessOverspend")
    """Set as ``true`` for enabling spend amounts over the budget limit.

    **Note**: You cannot set this field as ``true`` for budgets with ``recurringInterval`` set as ``DAILY`` or
    ``WEEKLY``."""

    limit: Optional[float] = UNSET
    """Spend limit for the initial budget period.

    **Note**: This field is required unless ``limitlessOverspend`` is set as ``true``."""

    limitless_goal: Optional[float] = Field(default=UNSET, alias="limitlessGoal")
    """Spend goal for a limitless budget.

    **Note**: You can set this field when ``limitlessOverspend`` is set as ``true``."""

    recurring_limit: Optional[float] = Field(default=UNSET, alias="recurringLimit")
    """Spend limit for all future budget periods.

    **Note**: This field is required when ``recurringInterval`` is set as any value other than ``NONE``."""

    overspend_buffer: Optional[float] = Field(default=UNSET, alias="overspendBuffer")
    """Spend amount allowed above the budget limit before transactions are declined.

    **Note**: You cannot set this field when ``limitlessOverspend`` is set as ``true`` or for budgets with
    ``recurringInterval`` as ``DAILY`` or ``WEEKLY``."""

    share_funds: Optional[EditBudgetShareFundsTypeOrStr] = Field(default=UNSET, alias="shareFunds")


class BudgetUpdateDtoDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    expiration_date: NotRequired[Date | None]
    recurring_interval: NotRequired[PeriodIntervalTypeOrStr]
    recur_month: NotRequired[int]
    timezone: NotRequired[str]
    auto_add_users: NotRequired[bool]
    receipt_required: NotRequired[bool]
    max_tx_size: NotRequired[float]
    carry_over: NotRequired[bool]
    limitless_overspend: NotRequired[bool]
    limit: NotRequired[float]
    limitless_goal: NotRequired[float]
    recurring_limit: NotRequired[float]
    overspend_buffer: NotRequired[float]
    share_funds: NotRequired[EditBudgetShareFundsTypeOrStr]
