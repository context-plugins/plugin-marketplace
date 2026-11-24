from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .attachment import Attachment, AttachmentDict
from .tag1 import Tag1, Tag1Dict
from .unions.email_address_list import EmailAddressList, EmailAddressListDict


class SendEmailRequest(SdkBaseModel):
    from_: str = Field(alias="from")
    """``Name <address>`` or a bare address on one of your active sending domains."""

    to: EmailAddressList
    """Recipients. With cc and bcc, 50 at most."""

    cc: Optional[EmailAddressList] = UNSET
    """One address or a list. Each may be ``Name <address>`` or a bare address."""

    bcc: Optional[EmailAddressList] = UNSET
    """One address or a list. Each may be ``Name <address>`` or a bare address."""

    subject: str
    html: Optional[str] = UNSET
    """The HTML part. ``html`` or ``text`` is required; 2 MB together."""

    text: Optional[str] = UNSET
    """The plain-text part."""

    reply_to: Optional[EmailAddressList] = UNSET
    """Where replies go: addresses on exactly the From domain (a subdomain counts as a different domain). A reply-to
    elsewhere answers 400 validation_error before anything is sent."""

    headers: Optional[dict[str, str]] = UNSET
    """Up to 10 custom headers. Names must start ``X-`` or ``List-``, or be ``In-Reply-To`` / ``References``."""

    attachments: Optional[list[Attachment]] = UNSET
    """10 MB decoded in all. Executables and scripts are refused."""

    tags: Optional[list[Tag1]] = UNSET
    """Returned on the message and in every webhook. Names starting ``cn_`` are reserved."""

    status_webhook_url: Optional[str] = Field(default=UNSET, alias="statusWebhookUrl")
    """Receives ``email.delivered`` / ``email.delayed`` / ``email.bounced`` / ``email.complained`` / ``email.failed``,
    signed per attempt with this key's secret (X-Timestamp, X-Signature, X-Event-Source)."""

    metadata: Optional[Any] = UNSET
    """Up to 4 KB, returned unchanged on the message and in every webhook."""


class SendEmailRequestDict(TypedDict):
    from_: str
    to: EmailAddressListDict
    cc: NotRequired[EmailAddressListDict]
    bcc: NotRequired[EmailAddressListDict]
    subject: str
    html: NotRequired[str]
    text: NotRequired[str]
    reply_to: NotRequired[EmailAddressListDict]
    headers: NotRequired[dict[str, str]]
    attachments: NotRequired[list[AttachmentDict]]
    tags: NotRequired[list[Tag1Dict]]
    status_webhook_url: NotRequired[str]
    metadata: NotRequired[Any]
