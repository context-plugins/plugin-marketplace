from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_attribute_values import (
    GoogleCloudApihubV1AttributeValues,
    GoogleCloudApihubV1AttributeValuesDict,
)
from .google_cloud_apihub_v1_attribute_values9 import (
    GoogleCloudApihubV1AttributeValues9,
    GoogleCloudApihubV1AttributeValues9Dict,
)
from .google_cloud_apihub_v1_attribute_values10 import (
    GoogleCloudApihubV1AttributeValues10,
    GoogleCloudApihubV1AttributeValues10Dict,
)
from .google_cloud_apihub_v1_attribute_values11 import (
    GoogleCloudApihubV1AttributeValues11,
    GoogleCloudApihubV1AttributeValues11Dict,
)
from .google_cloud_apihub_v1_attribute_values12 import (
    GoogleCloudApihubV1AttributeValues12,
    GoogleCloudApihubV1AttributeValues12Dict,
)
from .google_cloud_apihub_v1_attribute_values13 import (
    GoogleCloudApihubV1AttributeValues13,
    GoogleCloudApihubV1AttributeValues13Dict,
)
from .google_cloud_apihub_v1_attribute_values14 import (
    GoogleCloudApihubV1AttributeValues14,
    GoogleCloudApihubV1AttributeValues14Dict,
)
from .google_cloud_apihub_v1_attribute_values15 import (
    GoogleCloudApihubV1AttributeValues15,
    GoogleCloudApihubV1AttributeValues15Dict,
)
from .google_cloud_apihub_v1_attribute_values16 import (
    GoogleCloudApihubV1AttributeValues16,
    GoogleCloudApihubV1AttributeValues16Dict,
)
from .google_cloud_apihub_v1_attribute_values17 import (
    GoogleCloudApihubV1AttributeValues17,
    GoogleCloudApihubV1AttributeValues17Dict,
)
from .google_cloud_apihub_v1_documentation3 import (
    GoogleCloudApihubV1Documentation3,
    GoogleCloudApihubV1Documentation3Dict,
)
from .google_cloud_apihub_v1_owner3 import GoogleCloudApihubV1Owner3, GoogleCloudApihubV1Owner3Dict
from .google_cloud_apihub_v1_source_metadata import (
    GoogleCloudApihubV1SourceMetadata,
    GoogleCloudApihubV1SourceMetadataDict,
)


class GoogleCloudApihubV1Api1(SdkBaseModel):
    """Optional. The API."""

    documentation: Optional[GoogleCloudApihubV1Documentation3] = UNSET
    """Optional. The documentation for the API resource."""

    target_user: Optional[GoogleCloudApihubV1AttributeValues9] = Field(default=UNSET, alias="targetUser")
    """Optional. The target users for the API. This maps to the following system defined attribute:
    ``projects/{project}/locations/{location}/attributes/system-target-user`` attribute. The number of values for this
    attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All
    values should be from the list of allowed values defined for the attribute."""

    api_functional_requirements: Optional[GoogleCloudApihubV1AttributeValues10] = Field(
        default=UNSET, alias="apiFunctionalRequirements"
    )
    """Optional. The api functional requirements associated with the API resource. Cardinality is 1 for this attribute.
    This maps to the following system defined attribute:
    ``projects/{project}/locations/{location}/attributes/system-api-functional-requirements`` attribute. The value of
    the attribute should be a proper URI, and in case of Cloud Storage URI, it should point to a Cloud Storage object,
    not a directory."""

    owner: Optional[GoogleCloudApihubV1Owner3] = UNSET
    """Optional. Owner details for the API resource."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time at which the API resource was created."""

    name: Optional[str] = UNSET
    """Identifier. The name of the API resource in the API Hub. Format:
    ``projects/{project}/locations/{location}/apis/{api}``"""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time at which the API resource was last updated."""

    team: Optional[GoogleCloudApihubV1AttributeValues11] = UNSET
    """Optional. The team owning the API. This maps to the following system defined attribute:
    ``projects/{project}/locations/{location}/attributes/system-team`` attribute. The number of values for this
    attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All
    values should be from the list of allowed values defined for the attribute."""

    api_technical_requirements: Optional[GoogleCloudApihubV1AttributeValues12] = Field(
        default=UNSET, alias="apiTechnicalRequirements"
    )
    """Optional. The api technical requirements associated with the API resource. Cardinality is 1 for this attribute.
    This maps to the following system defined attribute:
    ``projects/{project}/locations/{location}/attributes/system-api-technical-requirements`` attribute. The value of the
    attribute should be a proper URI, and in case of Cloud Storage URI, it should point to a Cloud Storage object, not a
    directory."""

    selected_version: Optional[str] = Field(default=UNSET, alias="selectedVersion")
    """Optional. The selected version for an API resource. This can be used when special handling is needed on client
    side for particular version of the API. Format is
    ``projects/{project}/locations/{location}/apis/{api}/versions/{version}``"""

    service_type: Optional[GoogleCloudApihubV1AttributeValues13] = Field(default=UNSET, alias="serviceType")
    """Optional. The type of the service. This maps to the following system defined attribute:
    ``projects/{project}/locations/{location}/attributes/system-service-type`` attribute. The cardinality of this
    attribute is 1. All values should be from the list of allowed values defined for the attribute."""

    attributes: Optional[dict[str, GoogleCloudApihubV1AttributeValues]] = UNSET
    """Optional. The list of user defined attributes associated with the API resource. The key is the attribute name. It
    will be of the format: ``projects/{project}/locations/{location}/attributes/{attribute}``. The value is the
    attribute values associated with the resource."""

    versions: Optional[list[str]] = UNSET
    """Output only. The list of versions present in an API resource. Note: An API resource can be associated with more
    than 1 version. Format is ``projects/{project}/locations/{location}/apis/{api}/versions/{version}``"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. The display name of the API resource."""

    maturity_level: Optional[GoogleCloudApihubV1AttributeValues14] = Field(default=UNSET, alias="maturityLevel")
    """Optional. The maturity level of the API. This maps to the following system defined attribute:
    ``projects/{project}/locations/{location}/attributes/system-maturity-level`` attribute. The number of values for
    this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API.
    All values should be from the list of allowed values defined for the attribute."""

    fingerprint: Optional[str] = UNSET
    """Optional. Fingerprint of the API resource. This must be unique for each API resource. It can neither be unset nor
    be updated to an existing fingerprint of another API resource."""

    api_style: Optional[GoogleCloudApihubV1AttributeValues15] = Field(default=UNSET, alias="apiStyle")
    """Optional. The style of the API. This maps to the following system defined attribute:
    ``projects/{project}/locations/{location}/attributes/system-api-style`` attribute. The number of values for this
    attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All
    values should be from the list of allowed values defined for the attribute."""

    business_unit: Optional[GoogleCloudApihubV1AttributeValues16] = Field(default=UNSET, alias="businessUnit")
    """Optional. The business unit owning the API. This maps to the following system defined attribute:
    ``projects/{project}/locations/{location}/attributes/system-business-unit`` attribute. The number of values for this
    attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. All
    values should be from the list of allowed values defined for the attribute."""

    api_requirements: Optional[GoogleCloudApihubV1AttributeValues17] = Field(default=UNSET, alias="apiRequirements")
    """Optional. The api requirement doc associated with the API resource. Cardinality is 1 for this attribute. This
    maps to the following system defined attribute:
    ``projects/{project}/locations/{location}/attributes/system-api-requirements`` attribute. The value of the attribute
    should be a proper URI, and in case of Cloud Storage URI, it should point to a Cloud Storage object, not a
    directory."""

    description: Optional[str] = UNSET
    """Optional. The description of the API resource."""

    source_metadata: Optional[list[GoogleCloudApihubV1SourceMetadata]] = Field(default=UNSET, alias="sourceMetadata")
    """Output only. The list of sources and metadata from the sources of the API resource."""


class GoogleCloudApihubV1Api1Dict(TypedDict):
    documentation: NotRequired[GoogleCloudApihubV1Documentation3Dict]
    target_user: NotRequired[GoogleCloudApihubV1AttributeValues9Dict]
    api_functional_requirements: NotRequired[GoogleCloudApihubV1AttributeValues10Dict]
    owner: NotRequired[GoogleCloudApihubV1Owner3Dict]
    create_time: NotRequired[str]
    name: NotRequired[str]
    update_time: NotRequired[str]
    team: NotRequired[GoogleCloudApihubV1AttributeValues11Dict]
    api_technical_requirements: NotRequired[GoogleCloudApihubV1AttributeValues12Dict]
    selected_version: NotRequired[str]
    service_type: NotRequired[GoogleCloudApihubV1AttributeValues13Dict]
    attributes: NotRequired[dict[str, GoogleCloudApihubV1AttributeValuesDict]]
    versions: NotRequired[list[str]]
    display_name: NotRequired[str]
    maturity_level: NotRequired[GoogleCloudApihubV1AttributeValues14Dict]
    fingerprint: NotRequired[str]
    api_style: NotRequired[GoogleCloudApihubV1AttributeValues15Dict]
    business_unit: NotRequired[GoogleCloudApihubV1AttributeValues16Dict]
    api_requirements: NotRequired[GoogleCloudApihubV1AttributeValues17Dict]
    description: NotRequired[str]
    source_metadata: NotRequired[list[GoogleCloudApihubV1SourceMetadataDict]]
