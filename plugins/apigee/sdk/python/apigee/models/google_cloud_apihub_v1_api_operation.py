from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_attribute_values import (
    GoogleCloudApihubV1AttributeValues,
    GoogleCloudApihubV1AttributeValuesDict,
)
from .google_cloud_apihub_v1_operation_details2 import (
    GoogleCloudApihubV1OperationDetails2,
    GoogleCloudApihubV1OperationDetails2Dict,
)
from .google_cloud_apihub_v1_source_metadata import (
    GoogleCloudApihubV1SourceMetadata,
    GoogleCloudApihubV1SourceMetadataDict,
)


class GoogleCloudApihubV1ApiOperation(SdkBaseModel):
    """Represents an operation contained in an API version in the API Hub. An operation is added/updated/deleted in an
    API version when a new spec is added or an existing spec is updated/deleted in a version. Currently, an operation
    will be created only corresponding to OpenAPI spec as parsing is supported for OpenAPI spec. Alternatively
    operations can be managed via create,update and delete APIs, creation of apiOperation can be possible only for
    version with no parsed operations and update/delete can be possible only for operations created via create API."""

    name: Optional[str] = UNSET
    """Identifier. The name of the operation. Format:
    ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}``"""

    spec: Optional[str] = UNSET
    """Output only. The name of the spec will be of the format:
    ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}`` Note:The name of the spec
    will be empty if the operation is created via CreateApiOperation API."""

    deployments: Optional[list[str]] = UNSET
    """Optional. The deployments linked directly to this API operation. For operations parsed from a spec,
    ``UpdateApiOperation`` returns ``FAILED_PRECONDITION``; link the parent spec to the deployment via
    ``Spec.deployments`` instead. Format is ``projects/{project}/locations/{location}/deployments/{deployment}``"""

    source_metadata: Optional[list[GoogleCloudApihubV1SourceMetadata]] = Field(default=UNSET, alias="sourceMetadata")
    """Output only. The list of sources and metadata from the sources of the API operation."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time at which the operation was created."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time at which the operation was last updated."""

    attributes: Optional[dict[str, GoogleCloudApihubV1AttributeValues]] = UNSET
    """Optional. The list of user defined attributes associated with the API operation resource. The key is the
    attribute name. It will be of the format: ``projects/{project}/locations/{location}/attributes/{attribute}``. The
    value is the attribute values associated with the resource."""

    details: Optional[GoogleCloudApihubV1OperationDetails2] = UNSET
    """Optional. Operation details. Note: Even though this field is optional, it is required for CreateApiOperation API
    and we will fail the request if not provided."""


class GoogleCloudApihubV1ApiOperationDict(TypedDict):
    name: NotRequired[str]
    spec: NotRequired[str]
    deployments: NotRequired[list[str]]
    source_metadata: NotRequired[list[GoogleCloudApihubV1SourceMetadataDict]]
    create_time: NotRequired[str]
    update_time: NotRequired[str]
    attributes: NotRequired[dict[str, GoogleCloudApihubV1AttributeValuesDict]]
    details: NotRequired[GoogleCloudApihubV1OperationDetails2Dict]
