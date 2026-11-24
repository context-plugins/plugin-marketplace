from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ApiDebugSession(SdkBaseModel):
    """Session carries the debug session id and its creation time."""

    id: Optional[str] = UNSET
    """The debug session ID."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """The first transaction creation timestamp in millisecond, recorded by UAP."""

    environment_id: Optional[str] = Field(default=UNSET, alias="environmentId")
    """The environment ID of the deployed API proxy."""

    api_proxy_revision_id: Optional[str] = Field(default=UNSET, alias="apiProxyRevisionId")
    """The revision ID of the deployed API proxy."""


class GoogleCloudApigeeV1ApiDebugSessionDict(TypedDict):
    id: NotRequired[str]
    create_time: NotRequired[str]
    environment_id: NotRequired[str]
    api_proxy_revision_id: NotRequired[str]
