from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Input2(SdkBaseModel):
    min: str
    """Minimum balance from request"""

    max: Optional[str] = UNSET
    """Maximum balance from request"""


class Input2Dict(TypedDict):
    min: str
    max: NotRequired[str]
