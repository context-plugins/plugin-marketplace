from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OfferTag(SdkBaseModel):
    """Promotional tag on an offer"""

    text: Optional[str] = UNSET
    """Tag text"""

    tooltip: Optional[str] = UNSET
    """Tag tooltip text"""


class OfferTagDict(TypedDict):
    text: NotRequired[str]
    tooltip: NotRequired[str]
