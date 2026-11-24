from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resource_collection_filter import ResourceCollectionFilter, ResourceCollectionFilterDict


class GetResourceCollectionResponse(SdkBaseModel):
    resource_collection: Optional[ResourceCollectionFilter] = Field(default=UNSET, alias="ResourceCollection")
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If there are no more pages,
    this value is null."""


class GetResourceCollectionResponseDict(TypedDict):
    resource_collection: NotRequired[ResourceCollectionFilterDict]
    next_token: NotRequired[str]
