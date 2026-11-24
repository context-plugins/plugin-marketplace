from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TagsResponse(SdkBaseModel):
    id: str
    """The ID of the deleted tag."""


class TagsResponseDict(TypedDict):
    id: str
