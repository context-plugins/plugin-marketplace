from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class OfrepObjectFlag(SdkBaseModel):
    """An object typed flag value"""

    value: Any
    """Flag evaluation result"""


class OfrepObjectFlagDict(TypedDict):
    value: Any
