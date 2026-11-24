from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data4_commonelements_com_bulk_delivery_api import (
    Data4CommonelementsComBulkDeliveryApi,
    Data4CommonelementsComBulkDeliveryApiDict,
)


class ApiV1DeliveriesSchedulesResponse1(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[Data4CommonelementsComBulkDeliveryApi]


class ApiV1DeliveriesSchedulesResponse1Dict(TypedDict):
    ok: Literal["True"]
    data: list[Data4CommonelementsComBulkDeliveryApiDict]
