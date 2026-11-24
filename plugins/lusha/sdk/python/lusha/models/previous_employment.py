from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_lusha_api_documentation_enrich_api import (
    CompanyLushaApiDocumentationEnrichApi,
    CompanyLushaApiDocumentationEnrichApiDict,
)
from .job_title import JobTitle, JobTitleDict


class PreviousEmployment(SdkBaseModel):
    company: Optional[CompanyLushaApiDocumentationEnrichApi] = UNSET
    job_title: Optional[JobTitle] = Field(default=UNSET, alias="jobTitle")


class PreviousEmploymentDict(TypedDict):
    company: NotRequired[CompanyLushaApiDocumentationEnrichApiDict]
    job_title: NotRequired[JobTitleDict]
