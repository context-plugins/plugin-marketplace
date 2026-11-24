from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Sitelinks1(SdkBaseModel):
    url: Optional[str] = UNSET
    """Sitelink URL"""

    title: Optional[str] = UNSET
    """Sitelink title"""

    description: Optional[str] = UNSET
    """Sitelink description"""


class Sitelinks1Dict(TypedDict):
    url: NotRequired[str]
    title: NotRequired[str]
    description: NotRequired[str]
