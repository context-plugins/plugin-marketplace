from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .account2 import Account2, Account2Dict


class UpdateClassificationChartOfAccountsWithIdRequestDto(SdkBaseModel):
    """Update ClassificationChartOfAccounts with id request Dto."""

    id: str
    """BILL-generated ID of the chart of accounts. The value begins with ``0ca``."""

    name: Optional[str] = UNSET
    """Chart of accounts name"""

    description: Optional[str] = UNSET
    """Chart of accounts description"""

    parent_id: Optional[str] = Field(default=UNSET, alias="parentId")
    """BILL-generated ID of the parent chart of accounts. You can set this field if this chart of accounts is a child
    object."""

    account: Optional[Account2] = UNSET


class UpdateClassificationChartOfAccountsWithIdRequestDtoDict(TypedDict):
    id: str
    name: NotRequired[str]
    description: NotRequired[str]
    parent_id: NotRequired[str]
    account: NotRequired[Account2Dict]
