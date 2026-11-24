from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class OfrepBooleanFlag(SdkBaseModel):
    """A boolean typed flag value"""

    value: bool
    """Flag evaluation result"""


class OfrepBooleanFlagDict(TypedDict):
    value: bool
