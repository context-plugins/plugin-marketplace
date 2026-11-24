from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stored_attachment import StoredAttachment, StoredAttachmentDict


class TaskBrief(SdkBaseModel):
    """The persisted shape of ``task_versions.brief``.

    Drafts are no longer authored; the brief-archive worker is the only remaining writer."""

    prompt: str
    attachments: Optional[list[StoredAttachment]] = UNSET


class TaskBriefDict(TypedDict):
    prompt: str
    attachments: NotRequired[list[StoredAttachmentDict]]
