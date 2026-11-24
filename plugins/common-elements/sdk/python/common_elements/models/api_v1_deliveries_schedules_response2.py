from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data5_commonelements_com_bulk_delivery_api import (
    Data5CommonelementsComBulkDeliveryApi,
    Data5CommonelementsComBulkDeliveryApiDict,
)


class ApiV1DeliveriesSchedulesResponse2(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: Data5CommonelementsComBulkDeliveryApi


class ApiV1DeliveriesSchedulesResponse2Dict(TypedDict):
    ok: Literal["True"]
    data: Data5CommonelementsComBulkDeliveryApiDict
