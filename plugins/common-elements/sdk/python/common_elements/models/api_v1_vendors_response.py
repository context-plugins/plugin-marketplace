from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum_commonelements_com_vendors_api import DatumCommonelementsComVendorsApi, DatumCommonelementsComVendorsApiDict


class ApiV1VendorsResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[DatumCommonelementsComVendorsApi]


class ApiV1VendorsResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[DatumCommonelementsComVendorsApiDict]
