from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_llm_operation_config import (
    GoogleCloudApigeeV1LlmOperationConfig,
    GoogleCloudApigeeV1LlmOperationConfigDict,
)


class GoogleCloudApigeeV1LlmOperationGroup1(SdkBaseModel):
    """Optional. Configuration used to group Apigee proxies with resources, method types, LLM model and quotas. The
    resource refers to the resource URI (excluding the base path). With this grouping, the API product creator is able
    to fine-tune and give precise control over which REST methods have access to specific resources, specific LLM model
    and how many calls can be made (using the ``quota`` setting). **Note:** The ``api_resources`` setting cannot be
    specified for both the API product and llm operation group; otherwise the call will fail."""

    operation_configs: Optional[list[GoogleCloudApigeeV1LlmOperationConfig]] = Field(
        default=UNSET, alias="operationConfigs"
    )
    """Required. List of LLM operation configurations for either Apigee API proxies that are associated with this API
    product."""


class GoogleCloudApigeeV1LlmOperationGroup1Dict(TypedDict):
    operation_configs: NotRequired[list[GoogleCloudApigeeV1LlmOperationConfigDict]]
