from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ApiSecurityRuntimeConfig(SdkBaseModel):
    """Response for GetApiSecurityRuntimeConfig[EnvironmentService.GetApiSecurityRuntimeConfig]."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Time that the API Security Runtime configuration was updated."""

    uid: Optional[str] = UNSET
    """Unique ID for the API Security Runtime configuration. The ID will only change if the environment is deleted and
    recreated."""

    location: Optional[list[str]] = UNSET
    """A list of up to 5 Cloud Storage Blobs that contain SecurityActions."""

    revision_id: Optional[str] = Field(default=UNSET, alias="revisionId")
    """Revision ID of the API Security Runtime configuration. The higher the value, the more recently the configuration
    was deployed."""

    name: Optional[str] = UNSET
    """Name of the environment API Security Runtime configuration resource. Format:
    ``organizations/{org}/environments/{env}/apiSecurityRuntimeConfig``"""


class GoogleCloudApigeeV1ApiSecurityRuntimeConfigDict(TypedDict):
    update_time: NotRequired[str]
    uid: NotRequired[str]
    location: NotRequired[list[str]]
    revision_id: NotRequired[str]
    name: NotRequired[str]
