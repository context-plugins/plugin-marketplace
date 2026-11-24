from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_enum_attribute_values2 import (
    GoogleCloudApihubV1EnumAttributeValues2,
    GoogleCloudApihubV1EnumAttributeValues2Dict,
)
from .google_cloud_apihub_v1_string_attribute_values1 import (
    GoogleCloudApihubV1StringAttributeValues1,
    GoogleCloudApihubV1StringAttributeValues1Dict,
)
from .google_cloud_apihub_v1_string_attribute_values2 import (
    GoogleCloudApihubV1StringAttributeValues2,
    GoogleCloudApihubV1StringAttributeValues2Dict,
)
from .google_cloud_apihub_v1_string_attribute_values4 import (
    GoogleCloudApihubV1StringAttributeValues4,
    GoogleCloudApihubV1StringAttributeValues4Dict,
)


class GoogleCloudApihubV1AttributeValues10(SdkBaseModel):
    """Optional. The api functional requirements associated with the API resource. Cardinality is 1 for this attribute.
    This maps to the following system defined attribute:
    ``projects/{project}/locations/{location}/attributes/system-api-functional-requirements`` attribute. The value of
    the attribute should be a proper URI, and in case of Cloud Storage URI, it should point to a Cloud Storage object,
    not a directory."""

    attribute: Optional[str] = UNSET
    """Output only. The name of the attribute. Format: projects/{project}/locations/{location}/attributes/{attribute}"""

    uri_values: Optional[GoogleCloudApihubV1StringAttributeValues4] = Field(default=UNSET, alias="uriValues")
    """The attribute values associated with a resource in case attribute data type is URL, URI or IP, like
    gs://bucket-name/object-name."""

    string_values: Optional[GoogleCloudApihubV1StringAttributeValues1] = Field(default=UNSET, alias="stringValues")
    """The attribute values associated with a resource in case attribute data type is string."""

    enum_values: Optional[GoogleCloudApihubV1EnumAttributeValues2] = Field(default=UNSET, alias="enumValues")
    """The attribute values associated with a resource in case attribute data type is enum."""

    json_values: Optional[GoogleCloudApihubV1StringAttributeValues2] = Field(default=UNSET, alias="jsonValues")
    """The attribute values associated with a resource in case attribute data type is JSON."""


class GoogleCloudApihubV1AttributeValues10Dict(TypedDict):
    attribute: NotRequired[str]
    uri_values: NotRequired[GoogleCloudApihubV1StringAttributeValues4Dict]
    string_values: NotRequired[GoogleCloudApihubV1StringAttributeValues1Dict]
    enum_values: NotRequired[GoogleCloudApihubV1EnumAttributeValues2Dict]
    json_values: NotRequired[GoogleCloudApihubV1StringAttributeValues2Dict]
