from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .residential import Residential, ResidentialDict


class Addresses1(SdkBaseModel):
    residential: Optional[Residential] = UNSET


class Addresses1Dict(TypedDict):
    residential: NotRequired[ResidentialDict]
