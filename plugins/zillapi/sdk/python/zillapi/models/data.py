from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .building_unit import BuildingUnit, BuildingUnitDict


class Data(SdkBaseModel):
    units: Optional[list[BuildingUnit]] = UNSET
    """Unit listings. The first item is sometimes the building's parent record (no unitNumber); units follow."""


class DataDict(TypedDict):
    units: NotRequired[list[BuildingUnitDict]]
