from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Balance2(SdkBaseModel):
    """Balance criteria for filtering accounts. Only 'min' is required, 'max' is optional."""

    min: str
    """Minimum balance threshold (as string)"""

    max: Optional[str] = UNSET
    """Maximum balance threshold (as string, optional)"""


class Balance2Dict(TypedDict):
    min: str
    max: NotRequired[str]
