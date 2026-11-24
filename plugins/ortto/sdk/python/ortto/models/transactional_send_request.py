from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .attachment import Attachment, AttachmentDict
from .person_ortto_transactional_api import PersonOrttoTransactionalApi, PersonOrttoTransactionalApiDict


class TransactionalSendRequest(SdkBaseModel):
    email_id: Optional[str] = UNSET
    """ID of the transactional email asset to send."""

    non_transactional: Optional[bool] = UNSET
    """When true, the message is sent as a marketing email."""

    merge_by: Optional[list[str]] = UNSET
    people: Optional[list[PersonOrttoTransactionalApi]] = UNSET
    html_body: Optional[str] = UNSET
    subject: Optional[str] = UNSET
    attachments: Optional[list[Attachment]] = UNSET


class TransactionalSendRequestDict(TypedDict):
    email_id: NotRequired[str]
    non_transactional: NotRequired[bool]
    merge_by: NotRequired[list[str]]
    people: NotRequired[list[PersonOrttoTransactionalApiDict]]
    html_body: NotRequired[str]
    subject: NotRequired[str]
    attachments: NotRequired[list[AttachmentDict]]
