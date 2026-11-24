from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data1_commonelements_com_vendors_api import Data1CommonelementsComVendorsApi, Data1CommonelementsComVendorsApiDict


class ApiV1VendorsReviewsResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[Data1CommonelementsComVendorsApi]


class ApiV1VendorsReviewsResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[Data1CommonelementsComVendorsApiDict]
