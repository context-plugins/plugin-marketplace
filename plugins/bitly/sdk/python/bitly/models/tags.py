from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Tags(SdkBaseModel):
    tags: Optional[list[str]] = UNSET


class TagsDict(TypedDict):
    tags: NotRequired[list[str]]
