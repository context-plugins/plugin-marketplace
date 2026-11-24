from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.platform_doi_t_support_requests_api import PlatformDoiTSupportRequestsApiOrStr
from .enums.severity_doi_t_support_requests_api import SeverityDoiTSupportRequestsApiOrStr


class TicketDetailExtApi(SdkBaseModel):
    """Detailed information about a single support ticket."""

    id: Optional[int] = UNSET
    """Ticket ID."""

    subject: Optional[str] = UNSET
    """The subject of the ticket."""

    description: Optional[str] = UNSET
    """The body of the initial ticket message."""

    requester: Optional[str] = UNSET
    """Email address of the ticket requester."""

    severity: Optional[SeverityDoiTSupportRequestsApiOrStr] = UNSET
    """Ticket severity."""

    platform: Optional[PlatformDoiTSupportRequestsApiOrStr] = UNSET
    """Platform of the ticket."""

    product: Optional[str] = UNSET
    """Ticket product."""

    platform_info: Optional[str] = UNSET
    """The cloud asset identifier(s) the requester selected on the support form's asset-selector control — typically the
    GCP project ID, AWS account ID, Azure subscription ID, or equivalent. May contain multiple identifiers as a
    comma-separated list (no spaces) when the requester selected more than one asset, e.g. "111111111111,222222222222".
    Empty string when the ticket has no asset value (e.g. older tickets or tickets opened through paths that bypass the
    form selector)."""

    status: Optional[str] = UNSET
    """Ticket status."""

    create_time: Optional[int] = Field(default=UNSET, alias="createTime")
    """The time when this ticket was created, in milliseconds since the epoch."""

    update_time: Optional[int] = Field(default=UNSET, alias="updateTime")
    """The time when this ticket was last updated, in milliseconds since the epoch."""

    url_ui: Optional[str] = Field(default=UNSET, alias="urlUI")
    """Link to the ticket in DoiT console."""

    is_public: Optional[bool] = UNSET
    """Whether the ticket is public."""

    tags: Optional[list[str]] = UNSET
    """Ticket tags, filtered by caller type. DoiT employee (doer) callers receive the full tag set verbatim, including
    internal namespaces (e.g. ``tier/*``, ``synapse_*``). Customer callers receive only tags under the ``customer_tag/``
    namespace, with that prefix stripped (e.g. a tag added as ``billing`` reads back as ``billing``). Always present;
    empty array when the caller has no visible tags."""


class TicketDetailExtApiDict(TypedDict):
    id: NotRequired[int]
    subject: NotRequired[str]
    description: NotRequired[str]
    requester: NotRequired[str]
    severity: NotRequired[SeverityDoiTSupportRequestsApiOrStr]
    platform: NotRequired[PlatformDoiTSupportRequestsApiOrStr]
    product: NotRequired[str]
    platform_info: NotRequired[str]
    status: NotRequired[str]
    create_time: NotRequired[int]
    update_time: NotRequired[int]
    url_ui: NotRequired[str]
    is_public: NotRequired[bool]
    tags: NotRequired[list[str]]
