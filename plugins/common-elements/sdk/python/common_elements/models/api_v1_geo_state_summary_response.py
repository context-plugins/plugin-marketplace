from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum import Datum, DatumDict


class ApiV1GeoStateSummaryResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[Datum]


class ApiV1GeoStateSummaryResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[DatumDict]
