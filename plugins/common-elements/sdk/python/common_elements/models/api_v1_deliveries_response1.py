from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data1_commonelements_com_bulk_delivery_api import (
    Data1CommonelementsComBulkDeliveryApi,
    Data1CommonelementsComBulkDeliveryApiDict,
)


class ApiV1DeliveriesResponse1(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[Data1CommonelementsComBulkDeliveryApi]


class ApiV1DeliveriesResponse1Dict(TypedDict):
    ok: Literal["True"]
    data: list[Data1CommonelementsComBulkDeliveryApiDict]
