from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .companies import Companies, CompaniesDict
from .contacts import Contacts, ContactsDict


class V3ProspectingContactFilters(SdkBaseModel):
    contacts: Optional[Contacts] = UNSET
    companies: Optional[Companies] = UNSET


class V3ProspectingContactFiltersDict(TypedDict):
    contacts: NotRequired[ContactsDict]
    companies: NotRequired[CompaniesDict]
