from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .meta1 import Meta1, Meta1Dict
from .vehicle_change_event import VehicleChangeEvent, VehicleChangeEventDict


class VehicleChangesResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[VehicleChangeEvent]
    meta: Meta1


class VehicleChangesResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[VehicleChangeEventDict]
    meta: Meta1Dict
