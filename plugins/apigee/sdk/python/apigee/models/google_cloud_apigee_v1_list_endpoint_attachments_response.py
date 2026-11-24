from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_endpoint_attachment import (
    GoogleCloudApigeeV1EndpointAttachment,
    GoogleCloudApigeeV1EndpointAttachmentDict,
)


class GoogleCloudApigeeV1ListEndpointAttachmentsResponse(SdkBaseModel):
    """Response for ListEndpointAttachments method."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Page token that you can include in an ``ListEndpointAttachments`` request to retrieve the next page. If omitted,
    no subsequent pages exist."""

    endpoint_attachments: Optional[list[GoogleCloudApigeeV1EndpointAttachment]] = Field(
        default=UNSET, alias="endpointAttachments"
    )
    """Endpoint attachments in the specified organization."""


class GoogleCloudApigeeV1ListEndpointAttachmentsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    endpoint_attachments: NotRequired[list[GoogleCloudApigeeV1EndpointAttachmentDict]]
