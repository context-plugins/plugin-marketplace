from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Mcc(SdkBaseModel):
    """Merchant category codes returned from Data holders."""

    code: Optional[str] = UNSET
    """code"""

    title: Optional[str] = UNSET
    """title"""


class MccDict(TypedDict):
    code: NotRequired[str]
    title: NotRequired[str]
