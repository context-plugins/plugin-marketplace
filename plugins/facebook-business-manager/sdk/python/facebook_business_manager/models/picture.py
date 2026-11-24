from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data import Data, DataDict


class Picture(SdkBaseModel):
    """The Page profile picture"""

    data: Optional[Data] = UNSET


class PictureDict(TypedDict):
    data: NotRequired[DataDict]
