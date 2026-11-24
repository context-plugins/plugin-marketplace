from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeCollectionRequest(SdkBaseModel):
    collection_id: str = Field(alias="CollectionId")
    """The ID of the collection to describe."""


class DescribeCollectionRequestDict(TypedDict):
    collection_id: str
