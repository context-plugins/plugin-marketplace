from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum_commonelements_com_bulk_delivery_api import (
    DatumCommonelementsComBulkDeliveryApi,
    DatumCommonelementsComBulkDeliveryApiDict,
)


class ApiV1DeliveriesDatasetsResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[DatumCommonelementsComBulkDeliveryApi]


class ApiV1DeliveriesDatasetsResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[DatumCommonelementsComBulkDeliveryApiDict]
