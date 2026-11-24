from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v3_billing import V3Billing, V3BillingDict
from .v3_contact_preview import V3ContactPreview, V3ContactPreviewDict


class V3ContactsSearchResponse(SdkBaseModel):
    request_id: Optional[UUID] = Field(default=UNSET, alias="requestId")
    results: Optional[list[V3ContactPreview]] = UNSET
    billing: Optional[V3Billing] = UNSET
    """Credit usage summary for a V3 API request"""


class V3ContactsSearchResponseDict(TypedDict):
    request_id: NotRequired[UUID]
    results: NotRequired[list[V3ContactPreviewDict]]
    billing: NotRequired[V3BillingDict]
