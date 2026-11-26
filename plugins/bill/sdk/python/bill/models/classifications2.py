from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Classifications2(SdkBaseModel):
    chart_of_account_id: Optional[str] = Field(default=UNSET, alias="chartOfAccountId")
    """BILL-generated ID of the chart of accounts. The value begins with ``0ca``."""

    accounting_class_id: Optional[str] = Field(default=UNSET, alias="accountingClassId")
    """BILL-generated ID of the accounting class. The value begins with ``cls``."""

    department_id: Optional[str] = Field(default=UNSET, alias="departmentId")
    """BILL-generated ID of the department. The value begins with ``0de``."""

    location_id: Optional[str] = Field(default=UNSET, alias="locationId")
    """BILL-generated ID of the location. The value begins with ``loc``."""

    item_id: Optional[str] = Field(default=UNSET, alias="itemId")
    """BILL-generated ID of the item. The value begins with ``0ii``."""


class Classifications2Dict(TypedDict):
    chart_of_account_id: NotRequired[str]
    accounting_class_id: NotRequired[str]
    department_id: NotRequired[str]
    location_id: NotRequired[str]
    item_id: NotRequired[str]
