from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data1 import Data1, Data1Dict


class Media(SdkBaseModel):
    """Up to 12 recent public media items"""

    data: list[Data1]


class MediaDict(TypedDict):
    data: list[Data1Dict]
