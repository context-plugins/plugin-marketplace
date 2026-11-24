from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company import Company, CompanyDict
from .enums.job_status import JobStatusOrStr


class CompanyEnrichmentResult(SdkBaseModel):
    enrichment_id: Optional[UUID] = Field(default=UNSET, alias="enrichmentID")
    status: Optional[JobStatusOrStr] = UNSET
    percent_completed: Optional[int] = Field(default=UNSET, alias="percentCompleted")
    companies: Optional[list[Company]] = UNSET


class CompanyEnrichmentResultDict(TypedDict):
    enrichment_id: NotRequired[UUID]
    status: NotRequired[JobStatusOrStr]
    percent_completed: NotRequired[int]
    companies: NotRequired[list[CompanyDict]]
