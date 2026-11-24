from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TagModel(SdkBaseModel):
    """Promotional tag"""

    text: Optional[str] = UNSET
    """Tag text"""


class TagModelDict(TypedDict):
    text: NotRequired[str]
