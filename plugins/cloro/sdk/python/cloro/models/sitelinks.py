from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .inline import Inline, InlineDict


class Sitelinks(SdkBaseModel):
    """Sitelinks displayed under the main result"""

    inline: Optional[list[Inline]] = UNSET
    """Inline sitelinks"""


class SitelinksDict(TypedDict):
    inline: NotRequired[list[InlineDict]]
