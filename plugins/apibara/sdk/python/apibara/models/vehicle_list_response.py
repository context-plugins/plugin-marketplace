from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .cursor_meta import CursorMeta, CursorMetaDict
from .vehicle import Vehicle, VehicleDict


class VehicleListResponse(SdkBaseModel):
    data: list[Vehicle]
    meta: CursorMeta
    """Cursor pagination metadata."""


class VehicleListResponseDict(TypedDict):
    data: list[VehicleDict]
    meta: CursorMetaDict
