from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteCollectionRequest(SdkBaseModel):
    collection_id: str = Field(alias="CollectionId")
    """ID of the collection to delete."""


class DeleteCollectionRequestDict(TypedDict):
    collection_id: str
