from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1Schema(SdkBaseModel):
    """The schema details derived from the spec. Currently, this entity is supported for OpenAPI spec only. For OpenAPI
    spec, this maps to the schema defined in the ``definitions`` section for OpenAPI 2.0 version and in
    ``components.schemas`` section for OpenAPI 3.0 and 3.1 version."""

    raw_value: Optional[str] = Field(default=UNSET, alias="rawValue")
    """Output only. The raw value of the schema definition corresponding to the schema name in the spec."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Output only. The display name of the schema. This will map to the name of the schema in the spec."""


class GoogleCloudApihubV1SchemaDict(TypedDict):
    raw_value: NotRequired[str]
    display_name: NotRequired[str]
