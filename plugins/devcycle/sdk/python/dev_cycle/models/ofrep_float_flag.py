from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class OfrepFloatFlag(SdkBaseModel):
    """A float typed flag value"""

    value: float
    """Flag evaluation result"""


class OfrepFloatFlagDict(TypedDict):
    value: float
