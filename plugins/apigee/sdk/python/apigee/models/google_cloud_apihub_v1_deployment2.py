from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_attribute_values import (
    GoogleCloudApihubV1AttributeValues,
    GoogleCloudApihubV1AttributeValuesDict,
)
from .google_cloud_apihub_v1_attribute_values1 import (
    GoogleCloudApihubV1AttributeValues1,
    GoogleCloudApihubV1AttributeValues1Dict,
)
from .google_cloud_apihub_v1_attribute_values2 import (
    GoogleCloudApihubV1AttributeValues2,
    GoogleCloudApihubV1AttributeValues2Dict,
)
from .google_cloud_apihub_v1_attribute_values3 import (
    GoogleCloudApihubV1AttributeValues3,
    GoogleCloudApihubV1AttributeValues3Dict,
)
from .google_cloud_apihub_v1_attribute_values4 import (
    GoogleCloudApihubV1AttributeValues4,
    GoogleCloudApihubV1AttributeValues4Dict,
)
from .google_cloud_apihub_v1_attribute_values5 import (
    GoogleCloudApihubV1AttributeValues5,
    GoogleCloudApihubV1AttributeValues5Dict,
)
from .google_cloud_apihub_v1_documentation1 import (
    GoogleCloudApihubV1Documentation1,
    GoogleCloudApihubV1Documentation1Dict,
)
from .google_cloud_apihub_v1_source_metadata import (
    GoogleCloudApihubV1SourceMetadata,
    GoogleCloudApihubV1SourceMetadataDict,
)


class GoogleCloudApihubV1Deployment2(SdkBaseModel):
    """Optional. The deployment."""

    management_url: Optional[GoogleCloudApihubV1AttributeValues1] = Field(default=UNSET, alias="managementUrl")
    """Optional. The uri where users can navigate to for the management of the deployment. This maps to the following
    system defined attribute: ``projects/{project}/locations/{location}/attributes/system-management-url`` The number of
    values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via
    GetAttribute API. The value of the attribute should be a valid URL."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. The display name of the deployment."""

    description: Optional[str] = UNSET
    """Optional. The description of the deployment."""

    source_metadata: Optional[list[GoogleCloudApihubV1SourceMetadata]] = Field(default=UNSET, alias="sourceMetadata")
    """Output only. The list of sources and metadata from the sources of the deployment."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time at which the deployment was created."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time at which the deployment was last updated."""

    deployment_type: Optional[GoogleCloudApihubV1AttributeValues2] = Field(default=UNSET, alias="deploymentType")
    """Required. The type of deployment. This maps to the following system defined attribute:
    ``projects/{project}/locations/{location}/attributes/system-deployment-type`` attribute. The number of values for
    this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API.
    All values should be from the list of allowed values defined for the attribute."""

    source_revision: Optional[str] = Field(default=UNSET, alias="sourceRevision")
    """Optional. A revision identifier for the underlying gateway configuration that this deployment serves. For Apigee
    gateway variants, this is typically the proxy revision number populated automatically when the deployment is
    discovered."""

    specs: Optional[list[str]] = UNSET
    """Output only. The specs linked directly to this deployment. Note: a deployment could serve multiple specs (e.g.,
    across different revisions of the same underlying gateway configuration)."""

    documentation: Optional[GoogleCloudApihubV1Documentation1] = UNSET
    """Optional. The documentation of the deployment."""

    resource_uri: Optional[str] = Field(default=UNSET, alias="resourceUri")
    """Required. The resource URI identifies the deployment within its gateway. For Apigee gateways, its recommended to
    use the format: organizations/{org}/environments/{env}/apis/{api}. For ex: if a proxy with name ``orders`` is
    deployed in ``staging`` environment of ``cymbal`` organization, the resource URI would be:
    ``organizations/cymbal/environments/staging/apis/orders``."""

    api_versions: Optional[list[str]] = Field(default=UNSET, alias="apiVersions")
    """Output only. The API versions linked to this deployment. Note: A particular deployment could be linked to
    multiple different API versions (of same or different APIs)."""

    name: Optional[str] = UNSET
    """Identifier. The name of the deployment. Format:
    ``projects/{project}/locations/{location}/deployments/{deployment}``"""

    source_uri: Optional[GoogleCloudApihubV1AttributeValues3] = Field(default=UNSET, alias="sourceUri")
    """Optional. The uri where additional source specific information for this deployment can be found. This maps to the
    following system defined attribute: ``projects/{project}/locations/{location}/attributes/system-source-uri`` The
    number of values for this attribute will be based on the cardinality of the attribute. The same can be retrieved via
    GetAttribute API. The value of the attribute should be a valid URI, and in case of Cloud Storage URI, it should
    point to a Cloud Storage object, not a directory."""

    source_project: Optional[str] = Field(default=UNSET, alias="sourceProject")
    """Optional. The project to which the deployment belongs. For Google Cloud gateways, this will refer to the project
    identifier. For others like Edge/OPDK, this will refer to the org identifier."""

    slo: Optional[GoogleCloudApihubV1AttributeValues4] = UNSET
    """Optional. The SLO for this deployment. This maps to the following system defined attribute:
    ``projects/{project}/locations/{location}/attributes/system-slo`` attribute. The number of values for this attribute
    will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All values should
    be from the list of allowed values defined for the attribute."""

    endpoints: Optional[list[str]] = UNSET
    """Required. The endpoints at which this deployment resource is listening for API requests. This could be a list of
    complete URIs, hostnames or an IP addresses."""

    environment: Optional[GoogleCloudApihubV1AttributeValues5] = UNSET
    """Optional. The environment mapping to this deployment. This maps to the following system defined attribute:
    ``projects/{project}/locations/{location}/attributes/system-environment`` attribute. The number of values for this
    attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All
    values should be from the list of allowed values defined for the attribute."""

    source_environment: Optional[str] = Field(default=UNSET, alias="sourceEnvironment")
    """Optional. The environment at source for the deployment. For example: prod, dev, staging, etc."""

    api_operations: Optional[list[str]] = Field(default=UNSET, alias="apiOperations")
    """Output only. The API operations linked directly to this deployment."""

    attributes: Optional[dict[str, GoogleCloudApihubV1AttributeValues]] = UNSET
    """Optional. The list of user defined attributes associated with the deployment resource. The key is the attribute
    name. It will be of the format: ``projects/{project}/locations/{location}/attributes/{attribute}``. The value is the
    attribute values associated with the resource."""


class GoogleCloudApihubV1Deployment2Dict(TypedDict):
    management_url: NotRequired[GoogleCloudApihubV1AttributeValues1Dict]
    display_name: NotRequired[str]
    description: NotRequired[str]
    source_metadata: NotRequired[list[GoogleCloudApihubV1SourceMetadataDict]]
    create_time: NotRequired[str]
    update_time: NotRequired[str]
    deployment_type: NotRequired[GoogleCloudApihubV1AttributeValues2Dict]
    source_revision: NotRequired[str]
    specs: NotRequired[list[str]]
    documentation: NotRequired[GoogleCloudApihubV1Documentation1Dict]
    resource_uri: NotRequired[str]
    api_versions: NotRequired[list[str]]
    name: NotRequired[str]
    source_uri: NotRequired[GoogleCloudApihubV1AttributeValues3Dict]
    source_project: NotRequired[str]
    slo: NotRequired[GoogleCloudApihubV1AttributeValues4Dict]
    endpoints: NotRequired[list[str]]
    environment: NotRequired[GoogleCloudApihubV1AttributeValues5Dict]
    source_environment: NotRequired[str]
    api_operations: NotRequired[list[str]]
    attributes: NotRequired[dict[str, GoogleCloudApihubV1AttributeValuesDict]]
