from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .include1 import Include1, Include1Dict


class ContactFilters(SdkBaseModel):
    include: Optional[Include1] = UNSET


class ContactFiltersDict(TypedDict):
    include: NotRequired[Include1Dict]
