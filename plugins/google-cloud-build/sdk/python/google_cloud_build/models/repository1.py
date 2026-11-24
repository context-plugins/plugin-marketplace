from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Repository1(SdkBaseModel):
    """Required. The repository to create."""

    remote_uri: Optional[str] = Field(default=UNSET, alias="remoteUri")
    """Required. Git Clone HTTPS URI."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Server assigned timestamp for when the connection was created."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Server assigned timestamp for when the connection was updated."""

    name: Optional[str] = UNSET
    """Immutable. Resource name of the repository, in the format
    ``projects/*/locations/*/connections/*/repositories/*``."""

    webhook_id: Optional[str] = Field(default=UNSET, alias="webhookId")
    """Output only. External ID of the webhook created for the repository."""

    annotations: Optional[dict[str, str]] = UNSET
    """Optional. Allows clients to store small amounts of arbitrary data."""

    etag: Optional[str] = UNSET
    """This checksum is computed by the server based on the value of other fields, and may be sent on update and delete
    requests to ensure the client has an up-to-date value before proceeding."""


class Repository1Dict(TypedDict):
    remote_uri: NotRequired[str]
    create_time: NotRequired[str]
    update_time: NotRequired[str]
    name: NotRequired[str]
    webhook_id: NotRequired[str]
    annotations: NotRequired[dict[str, str]]
    etag: NotRequired[str]
