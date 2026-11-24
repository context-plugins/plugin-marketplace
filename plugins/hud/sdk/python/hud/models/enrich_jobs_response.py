from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job_enrichment_data import JobEnrichmentData, JobEnrichmentDataDict


class EnrichJobsResponse(SdkBaseModel):
    enrichments: Optional[dict[str, JobEnrichmentData]] = UNSET


class EnrichJobsResponseDict(TypedDict):
    enrichments: NotRequired[dict[str, JobEnrichmentDataDict]]
