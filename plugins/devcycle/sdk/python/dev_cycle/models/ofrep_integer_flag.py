from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class OfrepIntegerFlag(SdkBaseModel):
    """An integer typed flag value"""

    value: int
    """Flag evaluation result"""


class OfrepIntegerFlagDict(TypedDict):
    value: int
