from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class OfrepStringFlag(SdkBaseModel):
    """A string typed flag value"""

    value: str
    """Flag evaluation result"""


class OfrepStringFlagDict(TypedDict):
    value: str
