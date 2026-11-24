from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class LeadDeletionRequest(SdkBaseModel):
    id: Optional[str] = UNSET
    state: Optional[str] = UNSET
    requested_at: Optional[RFC3339DateTime] = UNSET


class LeadDeletionRequestDict(TypedDict):
    id: NotRequired[str]
    state: NotRequired[str]
    requested_at: NotRequired[RFC3339DateTime]
