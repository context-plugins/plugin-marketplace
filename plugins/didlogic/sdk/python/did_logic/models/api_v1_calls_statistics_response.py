from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .all import All, AllDict
from .missed1 import Missed1, Missed1Dict
from .placed import Placed, PlacedDict
from .received import Received, ReceivedDict


class ApiV1CallsStatisticsResponse(SdkBaseModel):
    placed: Placed
    """Statistics for placed (outgoing) calls"""

    received: Received
    """Statistics for received (incoming) calls"""

    missed: Missed1
    """Statistics for missed calls"""

    all: All
    """Combined statistics for all calls"""


class ApiV1CallsStatisticsResponseDict(TypedDict):
    placed: PlacedDict
    received: ReceivedDict
    missed: Missed1Dict
    all: AllDict
