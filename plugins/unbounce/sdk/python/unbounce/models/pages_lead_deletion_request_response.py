from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .lead_deletion_request import LeadDeletionRequest, LeadDeletionRequestDict


class PagesLeadDeletionRequestResponse(SdkBaseModel):
    lead_deletion_requests: Optional[list[LeadDeletionRequest]] = UNSET


class PagesLeadDeletionRequestResponseDict(TypedDict):
    lead_deletion_requests: NotRequired[list[LeadDeletionRequestDict]]
