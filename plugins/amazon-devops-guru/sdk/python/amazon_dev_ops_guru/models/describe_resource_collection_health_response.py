from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_formation_health import CloudFormationHealth, CloudFormationHealthDict
from .service_health import ServiceHealth, ServiceHealthDict
from .tag_health import TagHealth, TagHealthDict


class DescribeResourceCollectionHealthResponse(SdkBaseModel):
    cloud_formation: Optional[list[CloudFormationHealth]] = Field(default=UNSET, alias="CloudFormation")
    """The returned CloudFormationHealthOverview object that contains an InsightHealthOverview object with the requested
    system health information."""

    service: Optional[list[ServiceHealth]] = Field(default=UNSET, alias="Service")
    """An array of ServiceHealth objects that describes the health of the Amazon Web Services services associated with
    the resources in the collection."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If there are no more pages,
    this value is null."""

    tags: Optional[list[TagHealth]] = Field(default=UNSET, alias="Tags")
    """The Amazon Web Services tags that are used by resources in the resource collection. Tags help you identify and
    organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign
    the same tag to resources from different services to indicate that the resources are related. For example, you can
    assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information
    about using tags, see the Tagging best practices whitepaper. Each Amazon Web Services tag has two parts. A tag key
    (for example, CostCenter, En"""


class DescribeResourceCollectionHealthResponseDict(TypedDict):
    cloud_formation: NotRequired[list[CloudFormationHealthDict]]
    service: NotRequired[list[ServiceHealthDict]]
    next_token: NotRequired[str]
    tags: NotRequired[list[TagHealthDict]]
