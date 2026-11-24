from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .attachment import Attachment, AttachmentDict


class CommentExtApi(SdkBaseModel):
    """A comment on a support ticket."""

    id: Optional[int] = UNSET
    """Comment ID."""

    body: Optional[str] = UNSET
    """The text content of the comment."""

    public: bool
    """Whether the comment is public. Always present in new responses, including false for private internal notes. GET
    reports Zendesk visibility; POST reports the effective visibility of the created comment. Missing metadata in legacy
    responses or snapshots means unknown and must not be interpreted as false."""

    author: Optional[str] = UNSET
    """Stable comment-author attribution. User callers are represented by their verified email address; service-account
    callers use ``sa:<serviceAccountId>``."""

    created: Optional[int] = UNSET
    """The time when this comment was created, in milliseconds since the epoch."""

    attachments: Optional[list[Attachment]] = UNSET
    """File attachments on the comment."""


class CommentExtApiDict(TypedDict):
    id: NotRequired[int]
    body: NotRequired[str]
    public: bool
    author: NotRequired[str]
    created: NotRequired[int]
    attachments: NotRequired[list[AttachmentDict]]
