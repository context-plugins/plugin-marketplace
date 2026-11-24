from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .segment import Segment, SegmentDict


class SegmentShowResponse(SdkBaseModel):
    data: Segment
    """The segment object. To expand results, see the results endpoint."""


class SegmentShowResponseDict(TypedDict):
    data: SegmentDict
