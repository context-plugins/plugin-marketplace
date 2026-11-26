from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .account1 import Account1, Account1Dict


class CreateClassificationChartOfAccountsRequestDto(SdkBaseModel):
    """Create a chart of accounts"""

    name: str
    """Chart of accounts name"""

    description: Optional[str] = UNSET
    """Chart of accounts description"""

    parent_id: Optional[str] = Field(default=UNSET, alias="parentId")
    """BILL-generated ID of the parent chart of accounts. You can set this field if this chart of accounts is a child
    object."""

    account: Optional[Account1] = UNSET


class CreateClassificationChartOfAccountsRequestDtoDict(TypedDict):
    name: str
    description: NotRequired[str]
    parent_id: NotRequired[str]
    account: NotRequired[Account1Dict]
