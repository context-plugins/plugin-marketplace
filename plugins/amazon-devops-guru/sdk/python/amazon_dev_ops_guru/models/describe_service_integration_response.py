from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .service_integration_config import ServiceIntegrationConfig, ServiceIntegrationConfigDict


class DescribeServiceIntegrationResponse(SdkBaseModel):
    service_integration: Optional[ServiceIntegrationConfig] = Field(default=UNSET, alias="ServiceIntegration")


class DescribeServiceIntegrationResponseDict(TypedDict):
    service_integration: NotRequired[ServiceIntegrationConfigDict]
