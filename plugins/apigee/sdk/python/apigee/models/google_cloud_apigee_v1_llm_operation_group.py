from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_llm_operation_config import (
    GoogleCloudApigeeV1LlmOperationConfig,
    GoogleCloudApigeeV1LlmOperationConfigDict,
)


class GoogleCloudApigeeV1LlmOperationGroup(SdkBaseModel):
    """List of LLM operation configuration details associated with Apigee API proxies."""

    operation_configs: Optional[list[GoogleCloudApigeeV1LlmOperationConfig]] = Field(
        default=UNSET, alias="operationConfigs"
    )
    """Required. List of LLM operation configurations for either Apigee API proxies that are associated with this API
    product."""


class GoogleCloudApigeeV1LlmOperationGroupDict(TypedDict):
    operation_configs: NotRequired[list[GoogleCloudApigeeV1LlmOperationConfigDict]]
