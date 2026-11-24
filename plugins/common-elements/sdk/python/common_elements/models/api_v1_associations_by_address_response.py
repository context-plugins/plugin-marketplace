from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum1 import Datum1, Datum1Dict


class ApiV1AssociationsByAddressResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[Datum1]


class ApiV1AssociationsByAddressResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[Datum1Dict]
