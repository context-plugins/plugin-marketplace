from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_instance_attachment import (
    GoogleCloudApigeeV1InstanceAttachment,
    GoogleCloudApigeeV1InstanceAttachmentDict,
)


class GoogleCloudApigeeV1ListInstanceAttachmentsResponse(SdkBaseModel):
    """Response for ListInstanceAttachments."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Page token that you can include in a ListInstanceAttachments request to retrieve the next page of content. If
    omitted, no subsequent pages exist."""

    attachments: Optional[list[GoogleCloudApigeeV1InstanceAttachment]] = UNSET
    """Attachments for the instance."""


class GoogleCloudApigeeV1ListInstanceAttachmentsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    attachments: NotRequired[list[GoogleCloudApigeeV1InstanceAttachmentDict]]
