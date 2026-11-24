from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListTagsForResourceResponse(SdkBaseModel):
    tags: Optional[dict[str, str]] = Field(default=UNSET, alias="Tags")
    """A list of key-value tags assigned to the resource."""


class ListTagsForResourceResponseDict(TypedDict):
    tags: NotRequired[dict[str, str]]
