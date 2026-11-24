from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v3_contact_search_item import V3ContactSearchItem, V3ContactSearchItemDict
from .v3_contact_signals_dto import V3ContactSignalsDto, V3ContactSignalsDtoDict
from .v3_search_options import V3SearchOptions, V3SearchOptionsDict


class V3ContactsSearchRequest(SdkBaseModel):
    contacts: list[V3ContactSearchItem]
    options: Optional[V3SearchOptions] = UNSET
    """Additional options for search requests"""

    signals: Optional[V3ContactSignalsDto] = UNSET


class V3ContactsSearchRequestDict(TypedDict):
    contacts: list[V3ContactSearchItemDict]
    options: NotRequired[V3SearchOptionsDict]
    signals: NotRequired[V3ContactSignalsDtoDict]
