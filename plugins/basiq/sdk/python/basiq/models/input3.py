from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Input3(SdkBaseModel):
    """Echo of the input parameters"""

    min: str
    """Minimum income value from request"""

    max: str
    """Maximum income value from request"""


class Input3Dict(TypedDict):
    min: str
    max: str
