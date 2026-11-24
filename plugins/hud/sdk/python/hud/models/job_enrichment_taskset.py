from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JobEnrichmentTaskset(SdkBaseModel):
    id: UUID
    name: Optional[str] = UNSET


class JobEnrichmentTasksetDict(TypedDict):
    id: UUID
    name: NotRequired[str]
