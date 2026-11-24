from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_doi_t_support_requests_api import StatusDoiTSupportRequestsApiOrStr


class SupportV1TicketsRequest(SdkBaseModel):
    status: Optional[StatusDoiTSupportRequestsApiOrStr] = UNSET
    """The status to set on the request."""

    assignee: Optional[EmailStr] = UNSET
    """Email of the DoiT employee to assign the request to, resolved to a Zendesk agent. DoiT employees only."""


class SupportV1TicketsRequestDict(TypedDict):
    status: NotRequired[StatusDoiTSupportRequestsApiOrStr]
    assignee: NotRequired[EmailStr]
