from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .companies1 import Companies1, Companies1Dict
from .contacts1 import Contacts1, Contacts1Dict


class Filters(SdkBaseModel):
    """``filters.contacts`` cannot be combined with company ``searchText``, ``signals``, ``intent``, or ``technologies``
    on the same request — doing so returns ``400`` (contact filters are never silently ignored)."""

    companies: Companies1
    contacts: Optional[Contacts1] = UNSET


class FiltersDict(TypedDict):
    companies: Companies1Dict
    contacts: NotRequired[Contacts1Dict]
