from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_formation_collection import CloudFormationCollection, CloudFormationCollectionDict
from .tag_collection import TagCollection, TagCollectionDict


class ResourceCollection(SdkBaseModel):
    cloud_formation: Optional[CloudFormationCollection] = Field(default=UNSET, alias="CloudFormation")
    tags: Optional[list[TagCollection]] = Field(default=UNSET, alias="Tags")
    """The Amazon Web Services tags that are used by resources in the resource collection. Tags help you identify and
    organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign
    the same tag to resources from different services to indicate that the resources are related. For example, you can
    assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information
    about using tags, see the Tagging best practices whitepaper. Each Amazon Web Services tag has two parts. A tag key
    (for example, CostCenter, En"""


class ResourceCollectionDict(TypedDict):
    cloud_formation: NotRequired[CloudFormationCollectionDict]
    tags: NotRequired[list[TagCollectionDict]]
