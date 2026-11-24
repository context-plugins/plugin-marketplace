from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Increment(SdkBaseModel):
    initial: int
    """Seconds billed for the first block"""

    unit: int
    """Seconds per block after the first"""


class IncrementDict(TypedDict):
    initial: int
    unit: int
