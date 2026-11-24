from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .run_attachment import RunAttachment, RunAttachmentDict


class RunAttachmentsResponse(SdkBaseModel):
    attachments: list[RunAttachment]


class RunAttachmentsResponseDict(TypedDict):
    attachments: list[RunAttachmentDict]
