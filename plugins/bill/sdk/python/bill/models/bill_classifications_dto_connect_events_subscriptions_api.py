from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BillClassificationsDtoConnectEventsSubscriptionsApi(SdkBaseModel):
    """General ledger classifications information for the bill."""

    chart_of_account_id: Optional[str] = Field(default=UNSET, alias="chartOfAccountId")
    accounting_class_id: Optional[str] = Field(default=UNSET, alias="accountingClassId")
    department_id: Optional[str] = Field(default=UNSET, alias="departmentId")
    location_id: Optional[str] = Field(default=UNSET, alias="locationId")


class BillClassificationsDtoConnectEventsSubscriptionsApiDict(TypedDict):
    chart_of_account_id: NotRequired[str]
    accounting_class_id: NotRequired[str]
    department_id: NotRequired[str]
    location_id: NotRequired[str]
