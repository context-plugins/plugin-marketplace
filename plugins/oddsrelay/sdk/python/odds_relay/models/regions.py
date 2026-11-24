from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .regions1 import Regions1, Regions1Dict


class Regions(SdkBaseModel):
    version: str
    default_region: str
    regions: list[Regions1]


class RegionsDict(TypedDict):
    version: str
    default_region: str
    regions: list[Regions1Dict]
