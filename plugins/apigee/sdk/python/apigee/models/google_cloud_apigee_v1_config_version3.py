from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ConfigVersion3(SdkBaseModel):
    """Version of the API proxy configuration schema to which the API proxy conforms. Currently, the only supported
    value is 4.0 (``majorVersion.minorVersion``). This setting may be used in the future to track the evolution of the
    API proxy format."""

    major_version: Optional[int] = Field(default=UNSET, alias="majorVersion")
    """Major version of the API proxy configuration schema."""

    minor_version: Optional[int] = Field(default=UNSET, alias="minorVersion")
    """Minor version of the API proxy configuration schema."""


class GoogleCloudApigeeV1ConfigVersion3Dict(TypedDict):
    major_version: NotRequired[int]
    minor_version: NotRequired[int]
