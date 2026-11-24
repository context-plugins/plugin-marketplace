from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1TagsRequest(SdkBaseModel):
    tags: dict[str, str]
    """A TagMap object."""


class V1TagsRequestDict(TypedDict):
    tags: dict[str, str]
