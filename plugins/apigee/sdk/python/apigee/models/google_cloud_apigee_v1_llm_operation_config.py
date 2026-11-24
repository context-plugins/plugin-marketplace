from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_attribute import GoogleCloudApigeeV1Attribute, GoogleCloudApigeeV1AttributeDict
from .google_cloud_apigee_v1_llm_operation import GoogleCloudApigeeV1LlmOperation, GoogleCloudApigeeV1LlmOperationDict
from .google_cloud_apigee_v1_llm_token_quota1 import (
    GoogleCloudApigeeV1LlmTokenQuota1,
    GoogleCloudApigeeV1LlmTokenQuota1Dict,
)


class GoogleCloudApigeeV1LlmOperationConfig(SdkBaseModel):
    """Binds the resources in an API proxy or remote service with the allowed REST methods and associated quota
    enforcement."""

    llm_token_quota: Optional[GoogleCloudApigeeV1LlmTokenQuota1] = Field(default=UNSET, alias="llmTokenQuota")
    """Required. LLM token Quota parameters to be enforced for the resources, methods, and API source & LLM model
    combination. If none are specified, quota enforcement will not be done."""

    api_source: Optional[str] = Field(default=UNSET, alias="apiSource")
    """Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated."""

    llm_operations: Optional[list[GoogleCloudApigeeV1LlmOperation]] = Field(default=UNSET, alias="llmOperations")
    """Required. List of resource/method/model for the API proxy to which quota will applied. **Note**: Currently, you
    can specify only a single resource/method/model mapping. The call will fail if more than one resource/method/model
    mappings are provided."""

    attributes: Optional[list[GoogleCloudApigeeV1Attribute]] = UNSET
    """Optional. Custom attributes associated with the operation."""


class GoogleCloudApigeeV1LlmOperationConfigDict(TypedDict):
    llm_token_quota: NotRequired[GoogleCloudApigeeV1LlmTokenQuota1Dict]
    api_source: NotRequired[str]
    llm_operations: NotRequired[list[GoogleCloudApigeeV1LlmOperationDict]]
    attributes: NotRequired[list[GoogleCloudApigeeV1AttributeDict]]
