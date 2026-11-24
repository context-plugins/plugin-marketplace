from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.action import ActionOrStr
from .update_resource_collection_filter import UpdateResourceCollectionFilter, UpdateResourceCollectionFilterDict


class ResourceCollectionsRequest(SdkBaseModel):
    action: ActionOrStr = Field(alias="Action")
    """Specifies if the resource collection in the request is added or deleted to the resource collection."""

    resource_collection: UpdateResourceCollectionFilter = Field(alias="ResourceCollection")


class ResourceCollectionsRequestDict(TypedDict):
    action: ActionOrStr
    resource_collection: UpdateResourceCollectionFilterDict
