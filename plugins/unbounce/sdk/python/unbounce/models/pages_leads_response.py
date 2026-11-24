from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .lead import Lead, LeadDict


class PagesLeadsResponse(SdkBaseModel):
    leads: Optional[list[Lead]] = UNSET


class PagesLeadsResponseDict(TypedDict):
    leads: NotRequired[list[LeadDict]]
