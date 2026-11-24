from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum2 import Datum2, Datum2Dict


class ApiV1AssociationsNearbyResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[Datum2]


class ApiV1AssociationsNearbyResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[Datum2Dict]
