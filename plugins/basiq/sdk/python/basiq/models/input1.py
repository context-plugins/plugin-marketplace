from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Input1(SdkBaseModel):
    min: str
    """Minimum balance value"""

    max: str
    """Maximum balance value"""


class Input1Dict(TypedDict):
    min: str
    max: str
