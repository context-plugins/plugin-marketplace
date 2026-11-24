from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v3_contacts_on_company_search_filters import (
    V3ContactsOnCompanySearchFilters,
    V3ContactsOnCompanySearchFiltersDict,
)


class Contacts1(SdkBaseModel):
    include: Optional[V3ContactsOnCompanySearchFilters] = UNSET
    """Restricted contact-attribute filters usable within a company prospecting request."""

    exclude: Optional[V3ContactsOnCompanySearchFilters] = UNSET
    """Restricted contact-attribute filters usable within a company prospecting request."""


class Contacts1Dict(TypedDict):
    include: NotRequired[V3ContactsOnCompanySearchFiltersDict]
    exclude: NotRequired[V3ContactsOnCompanySearchFiltersDict]
