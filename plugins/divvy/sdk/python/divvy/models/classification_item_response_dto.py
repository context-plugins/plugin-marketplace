from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.item_type_response import ItemTypeResponseOrStr


class ClassificationItemResponseDto(SdkBaseModel):
    """CategoryItem response Dto."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the item. The value begins with ``0ii``."""

    type_: Optional[ItemTypeResponseOrStr] = Field(default=UNSET, alias="type")
    short_name: Optional[str] = Field(default=UNSET, alias="shortName")
    """Item short name"""

    name: Optional[str] = UNSET
    """Item name"""

    description: Optional[str] = UNSET
    """Item description"""

    archived: Optional[bool] = UNSET
    """Set as ``true`` if the item is archived"""

    parent_id: Optional[str] = Field(default=UNSET, alias="parentId")
    """BILL-generated ID of the parent item. You can set this field if this item is a child object."""

    price: Optional[float] = UNSET
    """Item price"""

    expense_chart_of_account_id: Optional[str] = Field(default=UNSET, alias="expenseChartOfAccountId")
    """BILL-generated ID of the chart of accounts for the item when it is used for bills or purchases in your accounting
    system. The value begins with ``0ca``."""

    purchase_description: Optional[str] = Field(default=UNSET, alias="purchaseDescription")
    """Item description when it is used for bills or purchases in your accounting system"""

    purchase_cost: Optional[float] = Field(default=UNSET, alias="purchaseCost")
    """Item purchase cost set in your accounting system"""

    chart_of_account_id: Optional[str] = Field(default=UNSET, alias="chartOfAccountId")
    """BILL-generated ID of the chart of accounts for the item. The value begins with ``0ca``."""

    taxable: Optional[bool] = UNSET
    """Set as ``true`` if the item is taxable"""

    percentage: Optional[float] = UNSET
    """Item tax percentage"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""


class ClassificationItemResponseDtoDict(TypedDict):
    id: NotRequired[str]
    type_: NotRequired[ItemTypeResponseOrStr]
    short_name: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    archived: NotRequired[bool]
    parent_id: NotRequired[str]
    price: NotRequired[float]
    expense_chart_of_account_id: NotRequired[str]
    purchase_description: NotRequired[str]
    purchase_cost: NotRequired[float]
    chart_of_account_id: NotRequired[str]
    taxable: NotRequired[bool]
    percentage: NotRequired[float]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
