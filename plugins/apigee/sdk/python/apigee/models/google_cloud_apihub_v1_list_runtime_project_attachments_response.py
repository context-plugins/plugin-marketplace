from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_runtime_project_attachment import (
    GoogleCloudApihubV1RuntimeProjectAttachment,
    GoogleCloudApihubV1RuntimeProjectAttachmentDict,
)


class GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse(SdkBaseModel):
    """The ListRuntimeProjectAttachments method's response."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    runtime_project_attachments: Optional[list[GoogleCloudApihubV1RuntimeProjectAttachment]] = Field(
        default=UNSET, alias="runtimeProjectAttachments"
    )
    """List of runtime project attachments."""


class GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    runtime_project_attachments: NotRequired[list[GoogleCloudApihubV1RuntimeProjectAttachmentDict]]
