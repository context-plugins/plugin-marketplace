from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Missed1(SdkBaseModel):
    """Statistics for missed calls"""

    count: int
    """Number of missed calls"""


class Missed1Dict(TypedDict):
    count: int
