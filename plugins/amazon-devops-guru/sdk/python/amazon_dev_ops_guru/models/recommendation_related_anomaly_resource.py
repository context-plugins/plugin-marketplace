from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RecommendationRelatedAnomalyResource(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the resource."""

    type_: Optional[str] = Field(default=UNSET, alias="Type")
    """The type of the resource. Resource types take the same form that is used by Amazon Web Services CloudFormation
    resource type identifiers, service-provider::service-name::data-type-name. For example, AWS::RDS::DBCluster. For
    more information, see Amazon Web Services resource and property types reference in the Amazon Web Services
    CloudFormation User Guide."""


class RecommendationRelatedAnomalyResourceDict(TypedDict):
    name: NotRequired[str]
    type_: NotRequired[str]
