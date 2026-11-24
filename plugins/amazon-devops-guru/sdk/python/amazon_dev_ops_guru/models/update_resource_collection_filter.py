from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .update_cloud_formation_collection_filter import (
    UpdateCloudFormationCollectionFilter,
    UpdateCloudFormationCollectionFilterDict,
)
from .update_tag_collection_filter import UpdateTagCollectionFilter, UpdateTagCollectionFilterDict


class UpdateResourceCollectionFilter(SdkBaseModel):
    cloud_formation: Optional[UpdateCloudFormationCollectionFilter] = Field(default=UNSET, alias="CloudFormation")
    tags: Optional[list[UpdateTagCollectionFilter]] = Field(default=UNSET, alias="Tags")
    """The updated Amazon Web Services tags used to filter the resources in the resource collection. Tags help you
    identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you
    can assign the same tag to resources from different services to indicate that the resources are related. For
    example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For
    more information about using tags, see the Tagging best practices whitepaper. Each Amazon Web Services tag has two
    parts. A tag key (for example, Cost"""


class UpdateResourceCollectionFilterDict(TypedDict):
    cloud_formation: NotRequired[UpdateCloudFormationCollectionFilterDict]
    tags: NotRequired[list[UpdateTagCollectionFilterDict]]
