from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1Schema2(SdkBaseModel):
    """Output only. The value of a schema definition."""

    raw_value: Optional[str] = Field(default=UNSET, alias="rawValue")
    """Output only. The raw value of the schema definition corresponding to the schema name in the spec."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Output only. The display name of the schema. This will map to the name of the schema in the spec."""


class GoogleCloudApihubV1Schema2Dict(TypedDict):
    raw_value: NotRequired[str]
    display_name: NotRequired[str]
