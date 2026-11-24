from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class VehicleLocation(SdkBaseModel):
    display: Optional[str] = UNSET
    state: OptionalNullable[str] = UNSET
    facility_id: Optional[str] = UNSET


class VehicleLocationDict(TypedDict):
    display: NotRequired[str]
    state: NotRequired[str | None]
    facility_id: NotRequired[str]
