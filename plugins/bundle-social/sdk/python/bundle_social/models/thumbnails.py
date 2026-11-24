from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .default1 import Default1, Default1Dict
from .high1 import High1, High1Dict
from .maxres1 import Maxres1, Maxres1Dict
from .medium1 import Medium1, Medium1Dict
from .standard1 import Standard1, Standard1Dict


class Thumbnails(SdkBaseModel):
    default: Optional[Default1] = UNSET
    medium: Optional[Medium1] = UNSET
    high: Optional[High1] = UNSET
    standard: Optional[Standard1] = UNSET
    maxres: Optional[Maxres1] = UNSET


class ThumbnailsDict(TypedDict):
    default: NotRequired[Default1Dict]
    medium: NotRequired[Medium1Dict]
    high: NotRequired[High1Dict]
    standard: NotRequired[Standard1Dict]
    maxres: NotRequired[Maxres1Dict]
