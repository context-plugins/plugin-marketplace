from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.unit import UnitOrStr


class BitlinkScansSummary(SdkBaseModel):
    total_scans: Optional[int] = UNSET
    units: Optional[int] = UNSET
    unit: Optional[UnitOrStr] = UNSET
    unit_reference: Optional[str] = UNSET


class BitlinkScansSummaryDict(TypedDict):
    total_scans: NotRequired[int]
    units: NotRequired[int]
    unit: NotRequired[UnitOrStr]
    unit_reference: NotRequired[str]
