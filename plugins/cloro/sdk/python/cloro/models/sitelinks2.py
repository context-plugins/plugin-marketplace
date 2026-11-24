from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .inline1 import Inline1, Inline1Dict


class Sitelinks2(SdkBaseModel):
    """Sitelinks displayed under the main result"""

    inline: Optional[list[Inline1]] = UNSET
    """Inline sitelinks"""


class Sitelinks2Dict(TypedDict):
    inline: NotRequired[list[Inline1Dict]]
