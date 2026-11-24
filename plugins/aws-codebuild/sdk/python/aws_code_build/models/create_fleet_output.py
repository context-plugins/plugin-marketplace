from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .fleet import Fleet, FleetDict


class CreateFleetOutput(SdkBaseModel):
    fleet: Optional[Fleet] = UNSET


class CreateFleetOutputDict(TypedDict):
    fleet: NotRequired[FleetDict]
