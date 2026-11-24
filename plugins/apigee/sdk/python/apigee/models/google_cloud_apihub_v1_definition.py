from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_apigee_projects_api import TypeApigeeProjectsApiOrStr
from .google_cloud_apihub_v1_attribute_values import (
    GoogleCloudApihubV1AttributeValues,
    GoogleCloudApihubV1AttributeValuesDict,
)
from .google_cloud_apihub_v1_schema2 import GoogleCloudApihubV1Schema2, GoogleCloudApihubV1Schema2Dict


class GoogleCloudApihubV1Definition(SdkBaseModel):
    """Represents a definition for example schema, request, response definitions contained in an API version. A
    definition is added/updated/deleted in an API version when a new spec is added or an existing spec is
    updated/deleted in a version. Currently, definition will be created only corresponding to OpenAPI spec as parsing is
    supported for OpenAPI spec. Also, within OpenAPI spec, only ``schema`` object is supported."""

    schema_value: Optional[GoogleCloudApihubV1Schema2] = Field(default=UNSET, alias="schema")
    """Output only. The value of a schema definition."""

    name: Optional[str] = UNSET
    """Identifier. The name of the definition. Format:
    ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/definitions/{definition}``"""

    spec: Optional[str] = UNSET
    """Output only. The name of the spec from where the definition was parsed. Format is
    ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}``"""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time at which the definition was created."""

    type_: Optional[TypeApigeeProjectsApiOrStr] = Field(default=UNSET, alias="type")
    """Output only. The type of the definition."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time at which the definition was last updated."""

    attributes: Optional[dict[str, GoogleCloudApihubV1AttributeValues]] = UNSET
    """Optional. The list of user defined attributes associated with the definition resource. The key is the attribute
    name. It will be of the format: ``projects/{project}/locations/{location}/attributes/{attribute}``. The value is the
    attribute values associated with the resource."""


class GoogleCloudApihubV1DefinitionDict(TypedDict):
    schema_value: NotRequired[GoogleCloudApihubV1Schema2Dict]
    name: NotRequired[str]
    spec: NotRequired[str]
    create_time: NotRequired[str]
    type_: NotRequired[TypeApigeeProjectsApiOrStr]
    update_time: NotRequired[str]
    attributes: NotRequired[dict[str, GoogleCloudApihubV1AttributeValuesDict]]
