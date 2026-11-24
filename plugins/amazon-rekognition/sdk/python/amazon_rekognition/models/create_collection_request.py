from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateCollectionRequest(SdkBaseModel):
    collection_id: str = Field(alias="CollectionId")
    """ID for the collection that you are creating."""

    tags: Optional[dict[str, str]] = Field(default=UNSET, alias="Tags")
    """A set of tags (key-value pairs) that you want to attach to the collection."""


class CreateCollectionRequestDict(TypedDict):
    collection_id: str
    tags: NotRequired[dict[str, str]]
