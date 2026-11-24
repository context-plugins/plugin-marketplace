from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.unit import UnitOrStr
from .qr_scans import QrScans, QrScansDict


class BitlinkScans(SdkBaseModel):
    scans: Optional[list[QrScans]] = UNSET
    units: Optional[int] = UNSET
    unit: Optional[UnitOrStr] = UNSET
    unit_reference: Optional[str] = UNSET


class BitlinkScansDict(TypedDict):
    scans: NotRequired[list[QrScansDict]]
    units: NotRequired[int]
    unit: NotRequired[UnitOrStr]
    unit_reference: NotRequired[str]
