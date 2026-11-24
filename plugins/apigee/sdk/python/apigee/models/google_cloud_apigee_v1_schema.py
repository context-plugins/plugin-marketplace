from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_schema_schema_element import (
    GoogleCloudApigeeV1SchemaSchemaElement,
    GoogleCloudApigeeV1SchemaSchemaElementDict,
)


class GoogleCloudApigeeV1Schema(SdkBaseModel):
    """Response for Schema call"""

    dimensions: Optional[list[GoogleCloudApigeeV1SchemaSchemaElement]] = UNSET
    """List of schema fields grouped as dimensions."""

    meta: Optional[list[str]] = UNSET
    """Additional metadata associated with schema. This is a legacy field and usually consists of an empty array of
    strings."""

    metrics: Optional[list[GoogleCloudApigeeV1SchemaSchemaElement]] = UNSET
    """List of schema fields grouped as dimensions that can be used with an aggregate function such as ``sum``, ``avg``,
    ``min``, and ``max``."""


class GoogleCloudApigeeV1SchemaDict(TypedDict):
    dimensions: NotRequired[list[GoogleCloudApigeeV1SchemaSchemaElementDict]]
    meta: NotRequired[list[str]]
    metrics: NotRequired[list[GoogleCloudApigeeV1SchemaSchemaElementDict]]
