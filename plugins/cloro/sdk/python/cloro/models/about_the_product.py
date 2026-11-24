from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AboutTheProduct(SdkBaseModel):
    """Google's description of the product"""

    description: Optional[str] = UNSET
    """Prose blurb"""

    features: Optional[list[str]] = UNSET
    """Feature bullets, when shown"""


class AboutTheProductDict(TypedDict):
    description: NotRequired[str]
    features: NotRequired[list[str]]
