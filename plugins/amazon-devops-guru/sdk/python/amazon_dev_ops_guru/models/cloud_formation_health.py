from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .insight_health import InsightHealth, InsightHealthDict


class CloudFormationHealth(SdkBaseModel):
    stack_name: Optional[str] = Field(default=UNSET, alias="StackName")
    """The name of the CloudFormation stack."""

    insight: Optional[InsightHealth] = Field(default=UNSET, alias="Insight")
    analyzed_resource_count: Optional[int] = Field(default=UNSET, alias="AnalyzedResourceCount")
    """Number of resources that DevOps Guru is monitoring in your account that are specified by an Amazon Web Services
    CloudFormation stack."""


class CloudFormationHealthDict(TypedDict):
    stack_name: NotRequired[str]
    insight: NotRequired[InsightHealthDict]
    analyzed_resource_count: NotRequired[int]
