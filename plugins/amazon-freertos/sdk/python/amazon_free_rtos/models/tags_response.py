from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TagsResponse(SdkBaseModel):
    tags: Optional[dict[str, str]] = UNSET


class TagsResponseDict(TypedDict):
    tags: NotRequired[dict[str, str]]
