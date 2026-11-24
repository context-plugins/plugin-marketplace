from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_attribute_values import (
    GoogleCloudApihubV1AttributeValues,
    GoogleCloudApihubV1AttributeValuesDict,
)
from .google_cloud_apihub_v1_documentation6 import (
    GoogleCloudApihubV1Documentation6,
    GoogleCloudApihubV1Documentation6Dict,
)


class GoogleCloudApihubV1ExternalApi(SdkBaseModel):
    """An external API represents an API being provided by external sources. This can be used to model third-party APIs
    and can be used to define dependencies."""

    endpoints: Optional[list[str]] = UNSET
    """Optional. List of endpoints on which this API is accessible."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Last update timestamp."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Creation timestamp."""

    name: Optional[str] = UNSET
    """Identifier. Format: ``projects/{project}/locations/{location}/externalApi/{externalApi}``."""

    paths: Optional[list[str]] = UNSET
    """Optional. List of paths served by this API."""

    description: Optional[str] = UNSET
    """Optional. Description of the external API. Max length is 500000 characters (Unicode Code Points)."""

    documentation: Optional[GoogleCloudApihubV1Documentation6] = UNSET
    """Optional. Documentation of the external API."""

    attributes: Optional[dict[str, GoogleCloudApihubV1AttributeValues]] = UNSET
    """Optional. The list of user defined attributes associated with the Version resource. The key is the attribute
    name. It will be of the format: ``projects/{project}/locations/{location}/attributes/{attribute}``. The value is the
    attribute values associated with the resource."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. Display name of the external API. Max length is 500 characters (Unicode Code Points)."""


class GoogleCloudApihubV1ExternalApiDict(TypedDict):
    endpoints: NotRequired[list[str]]
    update_time: NotRequired[str]
    create_time: NotRequired[str]
    name: NotRequired[str]
    paths: NotRequired[list[str]]
    description: NotRequired[str]
    documentation: NotRequired[GoogleCloudApihubV1Documentation6Dict]
    attributes: NotRequired[dict[str, GoogleCloudApihubV1AttributeValuesDict]]
    display_name: NotRequired[str]
