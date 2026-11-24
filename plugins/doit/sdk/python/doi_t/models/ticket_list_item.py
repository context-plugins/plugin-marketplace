from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.platform_doi_t_support_requests_api import PlatformDoiTSupportRequestsApiOrStr


class TicketListItem(SdkBaseModel):
    """Summary information about a support ticket."""

    create_time: Optional[int] = Field(default=UNSET, alias="createTime")
    """The time when this ticket was created, in milliseconds since the epoch."""

    id: Optional[int] = UNSET
    """Ticket ID (e.g., "33234")."""

    is_public: Optional[bool] = UNSET
    """Whether the ticket is public."""

    platform: Optional[PlatformDoiTSupportRequestsApiOrStr] = UNSET
    """Platform of the ticket."""

    product: Optional[str] = UNSET
    """Ticket product."""

    requester: Optional[str] = UNSET
    """The ticket requester in the form of user@domain.com"""

    severity: Optional[str] = UNSET
    """Ticket severity."""

    status: Optional[str] = UNSET
    """Ticket status."""

    subject: Optional[str] = UNSET
    """The subject of the ticket."""

    update_time: Optional[int] = Field(default=UNSET, alias="updateTime")
    """The time when this ticket was last updated, in milliseconds since the epoch."""

    url_ui: Optional[str] = Field(default=UNSET, alias="urlUI")
    """Link to the report in DoiT console."""

    tags: Optional[list[str]] = UNSET
    """Ticket tags, filtered by caller type. DoiT employee (doer) callers receive the full tag set verbatim, including
    internal namespaces (e.g. ``tier/*``, ``synapse_*``). Customer callers receive only tags under the ``customer_tag/``
    namespace, with that prefix stripped. Always present; empty array when the caller has no visible tags."""


class TicketListItemDict(TypedDict):
    create_time: NotRequired[int]
    id: NotRequired[int]
    is_public: NotRequired[bool]
    platform: NotRequired[PlatformDoiTSupportRequestsApiOrStr]
    product: NotRequired[str]
    requester: NotRequired[str]
    severity: NotRequired[str]
    status: NotRequired[str]
    subject: NotRequired[str]
    update_time: NotRequired[int]
    url_ui: NotRequired[str]
    tags: NotRequired[list[str]]
