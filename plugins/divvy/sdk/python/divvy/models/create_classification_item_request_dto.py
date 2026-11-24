from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.item_type_request import ItemTypeRequestOrStr


class CreateClassificationItemRequestDto(SdkBaseModel):
    """Create an item"""

    type_: ItemTypeRequestOrStr = Field(alias="type")
    short_name: Optional[str] = Field(default=UNSET, alias="shortName")
    """Item short name"""

    name: str
    """Item name"""

    description: Optional[str] = UNSET
    """Item description"""

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
    """Item tax percentage. You can set this field for a set of item ``type`` values.
    * ``DISCOUNT``
    * ``SALES_TAX``
    * ``OTHER_CHARGE``"""


class CreateClassificationItemRequestDtoDict(TypedDict):
    type_: ItemTypeRequestOrStr
    short_name: NotRequired[str]
    name: str
    description: NotRequired[str]
    parent_id: NotRequired[str]
    price: NotRequired[float]
    expense_chart_of_account_id: NotRequired[str]
    purchase_description: NotRequired[str]
    purchase_cost: NotRequired[float]
    chart_of_account_id: NotRequired[str]
    taxable: NotRequired[bool]
    percentage: NotRequired[float]
