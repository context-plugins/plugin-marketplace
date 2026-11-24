from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_schema_schema_property1 import (
    GoogleCloudApigeeV1SchemaSchemaProperty1,
    GoogleCloudApigeeV1SchemaSchemaProperty1Dict,
)


class GoogleCloudApigeeV1SchemaSchemaElement(SdkBaseModel):
    """Message type for the schema element"""

    name: Optional[str] = UNSET
    """Name of the field."""

    properties: Optional[GoogleCloudApigeeV1SchemaSchemaProperty1] = UNSET
    """Properties for the schema field. For example: { "createTime": "2016-02-26T10:23:09.592Z", "custom": "false",
    "type": "string" }"""


class GoogleCloudApigeeV1SchemaSchemaElementDict(TypedDict):
    name: NotRequired[str]
    properties: NotRequired[GoogleCloudApigeeV1SchemaSchemaProperty1Dict]
