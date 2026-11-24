from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1_apigee_projects_api import Type1ApigeeProjectsApiOrStr


class GoogleCloudApihubV1GeneratedSpecApiSource2(SdkBaseModel):
    """Output only. Where the pipeline observed this API."""

    type_display_name: Optional[str] = Field(default=UNSET, alias="typeDisplayName")
    """Output only. Server-supplied label (e.g. "Apigee X")."""

    source_display_name: Optional[str] = Field(default=UNSET, alias="sourceDisplayName")
    """Output only. Per-source instance label (e.g. "/" for Apigee X)."""

    type_: Optional[Type1ApigeeProjectsApiOrStr] = Field(default=UNSET, alias="type")
    """Output only. The source type."""


class GoogleCloudApihubV1GeneratedSpecApiSource2Dict(TypedDict):
    type_display_name: NotRequired[str]
    source_display_name: NotRequired[str]
    type_: NotRequired[Type1ApigeeProjectsApiOrStr]
