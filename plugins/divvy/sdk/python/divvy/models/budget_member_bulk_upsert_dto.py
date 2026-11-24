from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.budget_role_type import BudgetRoleTypeOrStr


class BudgetMemberBulkUpsertDto(SdkBaseModel):
    """Budget member bulk upsert member request dto."""

    user_id: str = Field(alias="userId")
    """BILL-generated ID or UUID of the user"""

    limit: Optional[float] = UNSET
    """Funds assigned to the user in the current budget period.

    **Note**: This field is required when ``shareBudgetFunds`` is set as ``false``."""

    recurring_limit: Optional[float] = Field(default=UNSET, alias="recurringLimit")
    """Funds assigned to the user in all future budget periods.

    **Note**: This field is required when ``shareBudgetFunds`` is set as ``false``."""

    role: Optional[BudgetRoleTypeOrStr] = UNSET
    share_budget_funds: Optional[bool] = Field(default=UNSET, alias="shareBudgetFunds")
    """Set as ``true`` to share all the budget funds with the user.

    **Note**: You cannot set this field as ``true`` when either ``limit`` or ``recurringLimit`` is set."""


class BudgetMemberBulkUpsertDtoDict(TypedDict):
    user_id: str
    limit: NotRequired[float]
    recurring_limit: NotRequired[float]
    role: NotRequired[BudgetRoleTypeOrStr]
    share_budget_funds: NotRequired[bool]
