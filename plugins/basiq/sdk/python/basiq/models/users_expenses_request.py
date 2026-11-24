from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UsersExpensesRequest(SdkBaseModel):
    accounts: Optional[list[str]] = UNSET
    """The list of accounts to be included in the expenses otherwise all the user accounts will be included in the
    summary"""

    from_month: Optional[str] = Field(default=UNSET, alias="fromMonth")
    """The first/start month to be included in the expense output e.g. "fromMonth":"2019-05". Resulting expenses
    resource will be based on data between fromMonth and toMonth."""

    to_month: Optional[str] = Field(default=UNSET, alias="toMonth")
    """The last/end month to be included in the expense output e.g. "toMonth":"2019-09". Resulting expenses resource
    will be based on data between fromMonth and toMonth."""


class UsersExpensesRequestDict(TypedDict):
    accounts: NotRequired[list[str]]
    from_month: NotRequired[str]
    to_month: NotRequired[str]
