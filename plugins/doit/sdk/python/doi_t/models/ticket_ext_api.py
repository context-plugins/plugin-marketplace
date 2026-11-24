from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.platform_doi_t_support_requests_api import PlatformDoiTSupportRequestsApiOrStr
from .enums.severity_doi_t_support_requests_api import SeverityDoiTSupportRequestsApiOrStr


class TicketExtApi(SdkBaseModel):
    """Payload to create a support ticket via API."""

    body: str
    """The body of the ticket (can include html formatting)."""

    created: Optional[str] = UNSET
    """Ticket creation time."""

    platform: PlatformDoiTSupportRequestsApiOrStr
    """Platform of the ticket."""

    product: str
    """Ticket product details."""

    requester: Optional[EmailStr] = UNSET
    """Human contact email used as the Zendesk ticket requester. Required when the caller is a service account. User
    callers must omit this field; their verified email remains the requester."""

    severity: SeverityDoiTSupportRequestsApiOrStr
    """Ticket severity."""

    subject: str
    """The subject of the ticket."""


class TicketExtApiDict(TypedDict):
    body: str
    created: NotRequired[str]
    platform: PlatformDoiTSupportRequestsApiOrStr
    product: str
    requester: NotRequired[EmailStr]
    severity: SeverityDoiTSupportRequestsApiOrStr
    subject: str
