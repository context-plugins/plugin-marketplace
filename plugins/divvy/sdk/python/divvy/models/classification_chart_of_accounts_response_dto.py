from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account import Account, AccountDict


class ClassificationChartOfAccountsResponseDto(SdkBaseModel):
    """ClassificationChartOfAccounts response Dto."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the chart of accounts. The value begins with ``0ca``."""

    archived: Optional[bool] = UNSET
    """Set as ``true`` if the chart of accounts is archived"""

    name: Optional[str] = UNSET
    """Chart of accounts name"""

    description: Optional[str] = UNSET
    """Chart of accounts description"""

    parent_id: Optional[str] = Field(default=UNSET, alias="parentId")
    """BILL-generated ID of the parent chart of accounts. You can set this field if this chart of accounts is a child
    object."""

    account: Optional[Account] = UNSET
    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""


class ClassificationChartOfAccountsResponseDtoDict(TypedDict):
    id: NotRequired[str]
    archived: NotRequired[bool]
    name: NotRequired[str]
    description: NotRequired[str]
    parent_id: NotRequired[str]
    account: NotRequired[AccountDict]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
