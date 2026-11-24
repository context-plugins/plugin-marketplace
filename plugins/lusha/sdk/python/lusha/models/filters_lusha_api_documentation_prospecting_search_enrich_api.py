from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_filters import CompanyFilters, CompanyFiltersDict
from .contact_filters import ContactFilters, ContactFiltersDict


class FiltersLushaApiDocumentationProspectingSearchEnrichApi(SdkBaseModel):
    contacts: Optional[ContactFilters] = UNSET
    companies: Optional[CompanyFilters] = UNSET


class FiltersLushaApiDocumentationProspectingSearchEnrichApiDict(TypedDict):
    contacts: NotRequired[ContactFiltersDict]
    companies: NotRequired[CompanyFiltersDict]
