from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1Space(SdkBaseModel):
    """Organization space resource."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. Display name of the space."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Last modified timestamp of the space."""

    name: Optional[str] = UNSET
    """Output only. Identifier. Id of the space. This field is used as the resource name, and must follow `AIP-122
    <https://google.aip.dev/122>`__ guidelines."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Create timestamp of the space."""


class GoogleCloudApigeeV1SpaceDict(TypedDict):
    display_name: NotRequired[str]
    update_time: NotRequired[str]
    name: NotRequired[str]
    create_time: NotRequired[str]
