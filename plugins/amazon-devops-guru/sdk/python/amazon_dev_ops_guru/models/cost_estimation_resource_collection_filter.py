from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_formation_cost_estimation_resource_collection_filter import (
    CloudFormationCostEstimationResourceCollectionFilter,
    CloudFormationCostEstimationResourceCollectionFilterDict,
)
from .tag_cost_estimation_resource_collection_filter import (
    TagCostEstimationResourceCollectionFilter,
    TagCostEstimationResourceCollectionFilterDict,
)


class CostEstimationResourceCollectionFilter(SdkBaseModel):
    cloud_formation: Optional[CloudFormationCostEstimationResourceCollectionFilter] = Field(
        default=UNSET, alias="CloudFormation"
    )
    tags: Optional[list[TagCostEstimationResourceCollectionFilter]] = Field(default=UNSET, alias="Tags")
    """The Amazon Web Services tags used to filter the resource collection that is used for a cost estimate. Tags help
    you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so
    you can assign the same tag to resources from different services to indicate that the resources are related. For
    example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For
    more information about using tags, see the Tagging best practices whitepaper. Each Amazon Web Services tag has two
    parts. A tag key (for examp"""


class CostEstimationResourceCollectionFilterDict(TypedDict):
    cloud_formation: NotRequired[CloudFormationCostEstimationResourceCollectionFilterDict]
    tags: NotRequired[list[TagCostEstimationResourceCollectionFilterDict]]
