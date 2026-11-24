from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .company_lusha_api_documentation_enrichment_api import (
    CompanyLushaApiDocumentationEnrichmentApi,
    CompanyLushaApiDocumentationEnrichmentApiDict,
)
from .job_title_lusha_api_documentation_enrichment_api import (
    JobTitleLushaApiDocumentationEnrichmentApi,
    JobTitleLushaApiDocumentationEnrichmentApiDict,
)


class PreviousJobResponse(SdkBaseModel):
    job_title: JobTitleLushaApiDocumentationEnrichmentApi = Field(alias="jobTitle")
    company: CompanyLushaApiDocumentationEnrichmentApi


class PreviousJobResponseDict(TypedDict):
    job_title: JobTitleLushaApiDocumentationEnrichmentApiDict
    company: CompanyLushaApiDocumentationEnrichmentApiDict
