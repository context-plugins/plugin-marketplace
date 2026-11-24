from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TagsGetRequest(SdkBaseModel):
    q: Optional[str] = UNSET
    """Optional search term to filter tags."""


class TagsGetRequestDict(TypedDict):
    q: NotRequired[str]
