from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_commonelements_com_bulk_delivery_api import (
    DataCommonelementsComBulkDeliveryApi,
    DataCommonelementsComBulkDeliveryApiDict,
)


class ApiV1DeliveriesResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: DataCommonelementsComBulkDeliveryApi


class ApiV1DeliveriesResponseDict(TypedDict):
    ok: Literal["True"]
    data: DataCommonelementsComBulkDeliveryApiDict
