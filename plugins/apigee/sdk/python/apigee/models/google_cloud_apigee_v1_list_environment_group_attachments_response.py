from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_environment_group_attachment import (
    GoogleCloudApigeeV1EnvironmentGroupAttachment,
    GoogleCloudApigeeV1EnvironmentGroupAttachmentDict,
)


class GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse(SdkBaseModel):
    """Response for ListEnvironmentGroupAttachments."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Page token that you can include in a ListEnvironmentGroupAttachments request to retrieve the next page. If
    omitted, no subsequent pages exist."""

    environment_group_attachments: Optional[list[GoogleCloudApigeeV1EnvironmentGroupAttachment]] = Field(
        default=UNSET, alias="environmentGroupAttachments"
    )
    """EnvironmentGroupAttachments for the specified environment group."""


class GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    environment_group_attachments: NotRequired[list[GoogleCloudApigeeV1EnvironmentGroupAttachmentDict]]
