from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ConfigVersion2(SdkBaseModel):
    """The version of the configuration schema to which this shared flow conforms. The only supported value currently is
    majorVersion 4 and minorVersion 0. This setting may be used in the future to enable evolution of the shared flow
    format."""

    major_version: Optional[int] = Field(default=UNSET, alias="majorVersion")
    """Major version of the API proxy configuration schema."""

    minor_version: Optional[int] = Field(default=UNSET, alias="minorVersion")
    """Minor version of the API proxy configuration schema."""


class GoogleCloudApigeeV1ConfigVersion2Dict(TypedDict):
    major_version: NotRequired[int]
    minor_version: NotRequired[int]
