from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data3_commonelements_com_bulk_delivery_api import (
    Data3CommonelementsComBulkDeliveryApi,
    Data3CommonelementsComBulkDeliveryApiDict,
)


class ApiV1DeliveriesSchedulesResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: Data3CommonelementsComBulkDeliveryApi


class ApiV1DeliveriesSchedulesResponseDict(TypedDict):
    ok: Literal["True"]
    data: Data3CommonelementsComBulkDeliveryApiDict
