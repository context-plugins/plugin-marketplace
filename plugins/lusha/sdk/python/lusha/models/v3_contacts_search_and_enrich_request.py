from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reveal import RevealOrStr
from .v3_contact_search_item import V3ContactSearchItem, V3ContactSearchItemDict
from .v3_search_options import V3SearchOptions, V3SearchOptionsDict


class V3ContactsSearchAndEnrichRequest(SdkBaseModel):
    contacts: list[V3ContactSearchItem]
    reveal: Optional[list[RevealOrStr]] = UNSET
    options: Optional[V3SearchOptions] = UNSET
    """Additional options for search requests"""


class V3ContactsSearchAndEnrichRequestDict(TypedDict):
    contacts: list[V3ContactSearchItemDict]
    reveal: NotRequired[list[RevealOrStr]]
    options: NotRequired[V3SearchOptionsDict]
