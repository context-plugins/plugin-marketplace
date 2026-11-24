from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enriched_person import EnrichedPerson, EnrichedPersonDict
from .enums.job_status import JobStatusOrStr


class PeopleEnrichmentResult(SdkBaseModel):
    enrichment_id: Optional[UUID] = Field(default=UNSET, alias="enrichmentID")
    status: Optional[JobStatusOrStr] = UNSET
    percent_completed: Optional[int] = Field(default=UNSET, alias="percentCompleted")
    people: Optional[list[EnrichedPerson]] = UNSET


class PeopleEnrichmentResultDict(TypedDict):
    enrichment_id: NotRequired[UUID]
    status: NotRequired[JobStatusOrStr]
    percent_completed: NotRequired[int]
    people: NotRequired[list[EnrichedPersonDict]]
