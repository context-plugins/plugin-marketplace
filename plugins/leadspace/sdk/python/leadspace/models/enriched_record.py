from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enriched_company import EnrichedCompany, EnrichedCompanyDict
from .enriched_person import EnrichedPerson, EnrichedPersonDict
from .enums.enrichment_status import EnrichmentStatusOrStr
from .profile_score import ProfileScore, ProfileScoreDict


class EnrichedRecord(SdkBaseModel):
    person: Optional[EnrichedPerson] = UNSET
    company: Optional[EnrichedCompany] = UNSET
    enrichment_status: Optional[EnrichmentStatusOrStr] = UNSET
    cdi_matched: Optional[str] = UNSET
    total_scores: Optional[list[ProfileScore]] = UNSET
    max_positive_total_score_profiles: Optional[list[str]] = UNSET


class EnrichedRecordDict(TypedDict):
    person: NotRequired[EnrichedPersonDict]
    company: NotRequired[EnrichedCompanyDict]
    enrichment_status: NotRequired[EnrichmentStatusOrStr]
    cdi_matched: NotRequired[str]
    total_scores: NotRequired[list[ProfileScoreDict]]
    max_positive_total_score_profiles: NotRequired[list[str]]
