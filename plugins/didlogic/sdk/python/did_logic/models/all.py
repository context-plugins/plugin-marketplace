from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class All(SdkBaseModel):
    """Combined statistics for all calls"""

    total: str
    """Total cost of all calls"""

    count: int
    """Total number of all calls"""


class AllDict(TypedDict):
    total: str
    count: int
