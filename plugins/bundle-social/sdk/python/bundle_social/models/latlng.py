from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Latlng(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    latitude: Optional[float] = UNSET
    longitude: Optional[float] = UNSET


class LatlngDict(TypedDict):
    latitude: NotRequired[float]
    longitude: NotRequired[float]
