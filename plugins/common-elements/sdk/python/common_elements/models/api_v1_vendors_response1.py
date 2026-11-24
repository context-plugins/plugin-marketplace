from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_commonelements_com_vendors_api import DataCommonelementsComVendorsApi, DataCommonelementsComVendorsApiDict


class ApiV1VendorsResponse1(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: DataCommonelementsComVendorsApi


class ApiV1VendorsResponse1Dict(TypedDict):
    ok: Literal["True"]
    data: DataCommonelementsComVendorsApiDict
