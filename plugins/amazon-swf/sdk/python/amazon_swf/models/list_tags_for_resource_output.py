from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resource_tag import ResourceTag, ResourceTagDict


class ListTagsForResourceOutput(SdkBaseModel):
    tags: Optional[list[ResourceTag]] = UNSET
    """An array of tags associated with the domain."""


class ListTagsForResourceOutputDict(TypedDict):
    tags: NotRequired[list[ResourceTagDict]]
