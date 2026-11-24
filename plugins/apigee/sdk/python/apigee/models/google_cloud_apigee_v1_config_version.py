from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ConfigVersion(SdkBaseModel):
    """Version of the API proxy configuration schema. Currently, only 4.0 is supported."""

    major_version: Optional[int] = Field(default=UNSET, alias="majorVersion")
    """Major version of the API proxy configuration schema."""

    minor_version: Optional[int] = Field(default=UNSET, alias="minorVersion")
    """Minor version of the API proxy configuration schema."""


class GoogleCloudApigeeV1ConfigVersionDict(TypedDict):
    major_version: NotRequired[int]
    minor_version: NotRequired[int]
