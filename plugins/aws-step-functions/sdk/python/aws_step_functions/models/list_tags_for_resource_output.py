from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class ListTagsForResourceOutput(SdkBaseModel):
    tags: Optional[list[TagModel]] = UNSET
    """An array of tags associated with the resource."""


class ListTagsForResourceOutputDict(TypedDict):
    tags: NotRequired[list[TagModelDict]]
