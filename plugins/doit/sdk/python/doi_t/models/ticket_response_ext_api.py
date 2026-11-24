from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.platform2 import Platform2OrStr
from .enums.severity1 import Severity1OrStr


class TicketResponseExtApi(SdkBaseModel):
    """Response returned after creating a ticket."""

    created: Optional[int] = UNSET
    """Ticket creation time."""

    id: Optional[int] = UNSET
    """Ticket ID."""

    platform: Optional[Platform2OrStr] = UNSET
    """Ticket platform."""

    product: Optional[str] = UNSET
    """Ticket product."""

    requester: Optional[str] = UNSET
    """Email address of the requester."""

    severity: Optional[Severity1OrStr] = UNSET
    """Severity of the ticket."""

    status: Optional[str] = UNSET
    """Ticket status."""

    subject: Optional[str] = UNSET
    """Ticket subject."""

    url_ui: Optional[str] = Field(default=UNSET, alias="urlUI")
    """URL to access the ticket in DoiT console."""


class TicketResponseExtApiDict(TypedDict):
    created: NotRequired[int]
    id: NotRequired[int]
    platform: NotRequired[Platform2OrStr]
    product: NotRequired[str]
    requester: NotRequired[str]
    severity: NotRequired[Severity1OrStr]
    status: NotRequired[str]
    subject: NotRequired[str]
    url_ui: NotRequired[str]
