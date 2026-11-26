from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.budget_role_type import BudgetRoleTypeOrStr


class BudgetMemberResponseDto(SdkBaseModel):
    """Budget members response."""

    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    """BILL-generated ID of the user"""

    user_uuid: Optional[str] = Field(default=UNSET, alias="userUuid")
    """BILL-generated UUID of the user"""

    spent: Optional[float] = UNSET
    """Total amount spent by the user in the current budget period"""

    limit: Optional[float] = UNSET
    """Funds assigned to the user in the current budget period"""

    recurring_limit: Optional[float] = Field(default=UNSET, alias="recurringLimit")
    """Funds assigned to the user in all future budget periods"""

    recurring: Optional[bool] = UNSET
    """Set as ``true`` if the user receives the ``recurringLimit`` funds in all future budget periods."""

    budget_role: Optional[BudgetRoleTypeOrStr] = Field(default=UNSET, alias="budgetRole")
    name: Optional[str] = UNSET
    """User display name"""

    retired: Optional[bool] = UNSET
    """Set as ``true`` if the budget member is retired"""

    share_budget_funds: Optional[bool] = Field(default=UNSET, alias="shareBudgetFunds")
    """Set as ``true`` if all the budget funds are shared with the user"""


class BudgetMemberResponseDtoDict(TypedDict):
    user_id: NotRequired[str]
    user_uuid: NotRequired[str]
    spent: NotRequired[float]
    limit: NotRequired[float]
    recurring_limit: NotRequired[float]
    recurring: NotRequired[bool]
    budget_role: NotRequired[BudgetRoleTypeOrStr]
    name: NotRequired[str]
    retired: NotRequired[bool]
    share_budget_funds: NotRequired[bool]
