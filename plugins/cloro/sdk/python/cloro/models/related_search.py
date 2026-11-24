from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RelatedSearch(SdkBaseModel):
    query: Optional[str] = UNSET
    """Related search query"""

    link: Optional[str] = UNSET
    """Google search URL for the related query"""


class RelatedSearchDict(TypedDict):
    query: NotRequired[str]
    link: NotRequired[str]
