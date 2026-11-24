from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TagsRequest(SdkBaseModel):
    tags: dict[str, str]


class TagsRequestDict(TypedDict):
    tags: dict[str, str]
