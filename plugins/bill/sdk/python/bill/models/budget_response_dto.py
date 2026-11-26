from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .current_period import CurrentPeriod, CurrentPeriodDict
from .enums.budget_share_funds_type import BudgetShareFundsTypeOrStr
from .enums.period_interval_type import PeriodIntervalTypeOrStr


class BudgetResponseDto(SdkBaseModel):
    """Budgets response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the budget"""

    uuid: Optional[str] = UNSET
    """BILL-generated UUID of the budget"""

    name: Optional[str] = UNSET
    """Budget name"""

    description: Optional[str] = UNSET
    """Budget description"""

    retired: Optional[bool] = UNSET
    """Set as ``true`` if the budget is retired"""

    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")
    """Budget start date"""

    expiration_date: Optional[Date] = Field(default=UNSET, alias="expirationDate")
    """Budget expiration date"""

    recurring_interval: Optional[PeriodIntervalTypeOrStr] = Field(default=UNSET, alias="recurringInterval")
    timezone: Optional[str] = UNSET
    """Timezone in which the budget funds are reset"""

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

    default: Optional[bool] = UNSET
    """Set as ``true`` if the current budget is set as the default budget for the company"""

    parent_budget_id: Optional[str] = Field(default=UNSET, alias="parentBudgetId")
    """BILL-generated ID of the parent budget"""

    parent_budget_uuid: Optional[str] = Field(default=UNSET, alias="parentBudgetUuid")
    """BILL-generated UUID of the parent budget"""

    budget_group: Optional[bool] = Field(default=UNSET, alias="budgetGroup")
    """Set as ``true`` if this budget is a budget group. A budget group can be set as a parent of other budgets."""

    share_funds: Optional[BudgetShareFundsTypeOrStr] = Field(default=UNSET, alias="shareFunds")
    recurring_limit: Optional[float] = Field(default=UNSET, alias="recurringLimit")
    """Spend limit for all future budget periods"""

    limitless_overspend: Optional[bool] = Field(default=UNSET, alias="limitlessOverspend")
    """Set as ``true`` for enabling spend amounts over the budget limit"""

    limitless_goal: Optional[float] = Field(default=UNSET, alias="limitlessGoal")
    """Spend goal for a limitless budget"""

    current_period: Optional[CurrentPeriod] = Field(default=UNSET, alias="currentPeriod")


class BudgetResponseDtoDict(TypedDict):
    id: NotRequired[str]
    uuid: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    retired: NotRequired[bool]
    start_date: NotRequired[Date]
    expiration_date: NotRequired[Date]
    recurring_interval: NotRequired[PeriodIntervalTypeOrStr]
    timezone: NotRequired[str]
    auto_add_users: NotRequired[bool]
    receipt_required: NotRequired[bool]
    max_tx_size: NotRequired[float]
    carry_over: NotRequired[bool]
    default: NotRequired[bool]
    parent_budget_id: NotRequired[str]
    parent_budget_uuid: NotRequired[str]
    budget_group: NotRequired[bool]
    share_funds: NotRequired[BudgetShareFundsTypeOrStr]
    recurring_limit: NotRequired[float]
    limitless_overspend: NotRequired[bool]
    limitless_goal: NotRequired[float]
    current_period: NotRequired[CurrentPeriodDict]
