from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1RuntimeConfig(SdkBaseModel):
    """Runtime configuration for the organization. Response for GetRuntimeConfig."""

    tenant_project_id: Optional[str] = Field(default=UNSET, alias="tenantProjectId")
    """Output only. Tenant project ID associated with the Apigee organization. The tenant project is used to host
    Google-managed resources that are dedicated to this Apigee organization. Clients have limited access to resources
    within the tenant project used to support Apigee runtime instances. Access to the tenant project is managed using
    SetSyncAuthorization. It can be empty if the tenant project hasn't been created yet."""

    analytics_bucket: Optional[str] = Field(default=UNSET, alias="analyticsBucket")
    """Cloud Storage bucket used for uploading Analytics records."""

    name: Optional[str] = UNSET
    """Name of the resource in the following format: ``organizations/{org}/runtimeConfig``."""

    trace_bucket: Optional[str] = Field(default=UNSET, alias="traceBucket")
    """Cloud Storage bucket used for uploading Trace records."""


class GoogleCloudApigeeV1RuntimeConfigDict(TypedDict):
    tenant_project_id: NotRequired[str]
    analytics_bucket: NotRequired[str]
    name: NotRequired[str]
    trace_bucket: NotRequired[str]
