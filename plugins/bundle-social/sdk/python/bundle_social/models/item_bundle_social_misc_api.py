from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .default import Default, DefaultDict
from .high import High, HighDict
from .maxres import Maxres, MaxresDict
from .medium import Medium, MediumDict
from .standard import Standard, StandardDict


class ItemBundleSocialMiscApi(SdkBaseModel):
    default: Optional[Default] = UNSET
    medium: Optional[Medium] = UNSET
    high: Optional[High] = UNSET
    standard: Optional[Standard] = UNSET
    maxres: Optional[Maxres] = UNSET


class ItemBundleSocialMiscApiDict(TypedDict):
    default: NotRequired[DefaultDict]
    medium: NotRequired[MediumDict]
    high: NotRequired[HighDict]
    standard: NotRequired[StandardDict]
    maxres: NotRequired[MaxresDict]
