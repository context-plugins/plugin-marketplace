from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.service_name import ServiceNameOrStr
from .service_insight_health import ServiceInsightHealth, ServiceInsightHealthDict


class ServiceHealth(SdkBaseModel):
    service_name: Optional[ServiceNameOrStr] = Field(default=UNSET, alias="ServiceName")
    """The name of the Amazon Web Services service."""

    insight: Optional[ServiceInsightHealth] = Field(default=UNSET, alias="Insight")
    analyzed_resource_count: Optional[int] = Field(default=UNSET, alias="AnalyzedResourceCount")
    """Number of resources that DevOps Guru is monitoring in an analyzed Amazon Web Services service."""


class ServiceHealthDict(TypedDict):
    service_name: NotRequired[ServiceNameOrStr]
    insight: NotRequired[ServiceInsightHealthDict]
    analyzed_resource_count: NotRequired[int]
