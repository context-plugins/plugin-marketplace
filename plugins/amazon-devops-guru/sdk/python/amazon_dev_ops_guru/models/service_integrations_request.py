from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .update_service_integration_config import UpdateServiceIntegrationConfig, UpdateServiceIntegrationConfigDict


class ServiceIntegrationsRequest(SdkBaseModel):
    service_integration: UpdateServiceIntegrationConfig = Field(alias="ServiceIntegration")


class ServiceIntegrationsRequestDict(TypedDict):
    service_integration: UpdateServiceIntegrationConfigDict
