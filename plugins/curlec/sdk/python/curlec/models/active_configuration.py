from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .settlements import Settlements, SettlementsDict


class ActiveConfiguration(SdkBaseModel):
    settlements: Optional[Settlements] = UNSET


class ActiveConfigurationDict(TypedDict):
    settlements: NotRequired[SettlementsDict]
