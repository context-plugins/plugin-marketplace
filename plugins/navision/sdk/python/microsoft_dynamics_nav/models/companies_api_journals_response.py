from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .journal import Journal, JournalDict


class CompaniesApiJournalsResponse(SdkBaseModel):
    value: Optional[list[Journal]] = UNSET


class CompaniesApiJournalsResponseDict(TypedDict):
    value: NotRequired[list[JournalDict]]
