from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.discovery_mode import DiscoveryModeOrStr
from .enums.state5_apigee_projects_api import State5ApigeeProjectsApiOrStr
from .google_cloud_apihub_v1_attribute_values import (
    GoogleCloudApihubV1AttributeValues,
    GoogleCloudApihubV1AttributeValuesDict,
)
from .google_cloud_apihub_v1_dependency_entity_reference1 import (
    GoogleCloudApihubV1DependencyEntityReference1,
    GoogleCloudApihubV1DependencyEntityReference1Dict,
)
from .google_cloud_apihub_v1_dependency_entity_reference3 import (
    GoogleCloudApihubV1DependencyEntityReference3,
    GoogleCloudApihubV1DependencyEntityReference3Dict,
)
from .google_cloud_apihub_v1_dependency_error_detail2 import (
    GoogleCloudApihubV1DependencyErrorDetail2,
    GoogleCloudApihubV1DependencyErrorDetail2Dict,
)


class GoogleCloudApihubV1Dependency(SdkBaseModel):
    """A dependency resource defined in the API hub describes a dependency directed from a consumer to a supplier
    entity. A dependency can be defined between two Operations or between an Operation and External API."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time at which the dependency was created."""

    description: Optional[str] = UNSET
    """Optional. Human readable description corresponding of the dependency."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time at which the dependency was last updated."""

    consumer: Optional[GoogleCloudApihubV1DependencyEntityReference3] = UNSET
    """Required. Immutable. The entity acting as the consumer in the dependency."""

    supplier: Optional[GoogleCloudApihubV1DependencyEntityReference1] = UNSET
    """Required. Immutable. The entity acting as the supplier in the dependency."""

    error_detail: Optional[GoogleCloudApihubV1DependencyErrorDetail2] = Field(default=UNSET, alias="errorDetail")
    """Output only. Error details of a dependency if the system has detected it internally."""

    state: Optional[State5ApigeeProjectsApiOrStr] = UNSET
    """Output only. State of the dependency."""

    attributes: Optional[dict[str, GoogleCloudApihubV1AttributeValues]] = UNSET
    """Optional. The list of user defined attributes associated with the dependency resource. The key is the attribute
    name. It will be of the format: ``projects/{project}/locations/{location}/attributes/{attribute}``. The value is the
    attribute values associated with the resource."""

    name: Optional[str] = UNSET
    """Identifier. The name of the dependency in the API Hub. Format:
    ``projects/{project}/locations/{location}/dependencies/{dependency}``"""

    discovery_mode: Optional[DiscoveryModeOrStr] = Field(default=UNSET, alias="discoveryMode")
    """Output only. Discovery mode of the dependency."""


class GoogleCloudApihubV1DependencyDict(TypedDict):
    create_time: NotRequired[str]
    description: NotRequired[str]
    update_time: NotRequired[str]
    consumer: NotRequired[GoogleCloudApihubV1DependencyEntityReference3Dict]
    supplier: NotRequired[GoogleCloudApihubV1DependencyEntityReference1Dict]
    error_detail: NotRequired[GoogleCloudApihubV1DependencyErrorDetail2Dict]
    state: NotRequired[State5ApigeeProjectsApiOrStr]
    attributes: NotRequired[dict[str, GoogleCloudApihubV1AttributeValuesDict]]
    name: NotRequired[str]
    discovery_mode: NotRequired[DiscoveryModeOrStr]
