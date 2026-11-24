from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.parsing_mode import ParsingModeOrStr
from .google_cloud_apihub_v1_additional_spec_content import (
    GoogleCloudApihubV1AdditionalSpecContent,
    GoogleCloudApihubV1AdditionalSpecContentDict,
)
from .google_cloud_apihub_v1_attribute_values import (
    GoogleCloudApihubV1AttributeValues,
    GoogleCloudApihubV1AttributeValuesDict,
)
from .google_cloud_apihub_v1_attribute_values18 import (
    GoogleCloudApihubV1AttributeValues18,
    GoogleCloudApihubV1AttributeValues18Dict,
)
from .google_cloud_apihub_v1_documentation4 import (
    GoogleCloudApihubV1Documentation4,
    GoogleCloudApihubV1Documentation4Dict,
)
from .google_cloud_apihub_v1_lint_response2 import (
    GoogleCloudApihubV1LintResponse2,
    GoogleCloudApihubV1LintResponse2Dict,
)
from .google_cloud_apihub_v1_source_metadata import (
    GoogleCloudApihubV1SourceMetadata,
    GoogleCloudApihubV1SourceMetadataDict,
)
from .google_cloud_apihub_v1_spec_contents4 import (
    GoogleCloudApihubV1SpecContents4,
    GoogleCloudApihubV1SpecContents4Dict,
)
from .google_cloud_apihub_v1_spec_details2 import GoogleCloudApihubV1SpecDetails2, GoogleCloudApihubV1SpecDetails2Dict


class GoogleCloudApihubV1Spec3(SdkBaseModel):
    """This represents Spec resource in search results. Only name, display_name, description, spec_type and
    documentation fields are populated in search results."""

    lint_response: Optional[GoogleCloudApihubV1LintResponse2] = Field(default=UNSET, alias="lintResponse")
    """Optional. The lint response for the spec."""

    deployments: Optional[list[str]] = UNSET
    """Optional. The deployments linked directly to this spec. Format is
    ``projects/{project}/locations/{location}/deployments/{deployment}``"""

    name: Optional[str] = UNSET
    """Identifier. The name of the spec. Format:
    ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}``"""

    attributes: Optional[dict[str, GoogleCloudApihubV1AttributeValues]] = UNSET
    """Optional. The list of user defined attributes associated with the spec. The key is the attribute name. It will be
    of the format: ``projects/{project}/locations/{location}/attributes/{attribute}``. The value is the attribute values
    associated with the resource."""

    source_metadata: Optional[list[GoogleCloudApihubV1SourceMetadata]] = Field(default=UNSET, alias="sourceMetadata")
    """Output only. The list of sources and metadata from the sources of the spec."""

    contents: Optional[GoogleCloudApihubV1SpecContents4] = UNSET
    """Optional. Input only. The contents of the uploaded spec."""

    source_uri: Optional[str] = Field(default=UNSET, alias="sourceUri")
    """Optional. The URI of the spec source in case file is uploaded from an external version control system."""

    additional_spec_contents: Optional[list[GoogleCloudApihubV1AdditionalSpecContent]] = Field(
        default=UNSET, alias="additionalSpecContents"
    )
    """Output only. The additional spec contents for the spec."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time at which the spec was created."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time at which the spec was last updated."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. The display name of the spec. This can contain the file name of the spec."""

    spec_type: Optional[GoogleCloudApihubV1AttributeValues18] = Field(default=UNSET, alias="specType")
    """Required. The type of spec. The value should be one of the allowed values defined for
    ``projects/{project}/locations/{location}/attributes/system-spec-type`` attribute. The number of values for this
    attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute API. Note,
    this field is mandatory if content is provided."""

    details: Optional[GoogleCloudApihubV1SpecDetails2] = UNSET
    """Output only. Details parsed from the spec."""

    parsing_mode: Optional[ParsingModeOrStr] = Field(default=UNSET, alias="parsingMode")
    """Optional. Input only. Enum specifying the parsing mode for OpenAPI Specification (OAS) parsing."""

    documentation: Optional[GoogleCloudApihubV1Documentation4] = UNSET
    """Optional. The documentation of the spec. For OpenAPI spec, this will be populated from ``externalDocs`` in
    OpenAPI spec."""


class GoogleCloudApihubV1Spec3Dict(TypedDict):
    lint_response: NotRequired[GoogleCloudApihubV1LintResponse2Dict]
    deployments: NotRequired[list[str]]
    name: NotRequired[str]
    attributes: NotRequired[dict[str, GoogleCloudApihubV1AttributeValuesDict]]
    source_metadata: NotRequired[list[GoogleCloudApihubV1SourceMetadataDict]]
    contents: NotRequired[GoogleCloudApihubV1SpecContents4Dict]
    source_uri: NotRequired[str]
    additional_spec_contents: NotRequired[list[GoogleCloudApihubV1AdditionalSpecContentDict]]
    create_time: NotRequired[str]
    update_time: NotRequired[str]
    display_name: NotRequired[str]
    spec_type: NotRequired[GoogleCloudApihubV1AttributeValues18Dict]
    details: NotRequired[GoogleCloudApihubV1SpecDetails2Dict]
    parsing_mode: NotRequired[ParsingModeOrStr]
    documentation: NotRequired[GoogleCloudApihubV1Documentation4Dict]
