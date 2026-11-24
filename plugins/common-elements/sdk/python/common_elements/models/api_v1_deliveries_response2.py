from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data2_commonelements_com_bulk_delivery_api import (
    Data2CommonelementsComBulkDeliveryApi,
    Data2CommonelementsComBulkDeliveryApiDict,
)


class ApiV1DeliveriesResponse2(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: Data2CommonelementsComBulkDeliveryApi


class ApiV1DeliveriesResponse2Dict(TypedDict):
    ok: Literal["True"]
    data: Data2CommonelementsComBulkDeliveryApiDict
