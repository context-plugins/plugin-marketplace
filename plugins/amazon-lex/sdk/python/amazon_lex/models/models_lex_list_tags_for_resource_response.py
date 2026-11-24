from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class ModelsLexListTagsForResourceResponse(SdkBaseModel):
    tags: Optional[list[TagModel]] = UNSET
    """The tags associated with a resource."""


class ModelsLexListTagsForResourceResponseDict(TypedDict):
    tags: NotRequired[list[TagModelDict]]
