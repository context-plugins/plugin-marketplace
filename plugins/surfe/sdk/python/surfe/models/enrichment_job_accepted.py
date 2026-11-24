from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EnrichmentJobAccepted(SdkBaseModel):
    enrichment_id: Optional[UUID] = Field(default=UNSET, alias="enrichmentID")
    enrichment_callback_url: Optional[str] = Field(default=UNSET, alias="enrichmentCallbackURL")
    message: Optional[str] = UNSET
    """Estimated completion time."""


class EnrichmentJobAcceptedDict(TypedDict):
    enrichment_id: NotRequired[UUID]
    enrichment_callback_url: NotRequired[str]
    message: NotRequired[str]
