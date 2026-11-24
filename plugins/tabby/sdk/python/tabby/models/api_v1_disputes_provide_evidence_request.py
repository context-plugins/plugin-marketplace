from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1DisputesProvideEvidenceRequest(SdkBaseModel):
    content: str
    """Text content of the evidence being provided."""

    attachment_ids: Optional[list[UUID]] = UNSET
    """Array of attachment IDs to include as evidence. IDs can be received via ``upload attachment`` endpoint."""


class ApiV1DisputesProvideEvidenceRequestDict(TypedDict):
    content: str
    attachment_ids: NotRequired[list[UUID]]
