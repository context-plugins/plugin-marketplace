from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .journal_line import JournalLine, JournalLineDict


class CompaniesApiJournalsApiJournalLinesResponse(SdkBaseModel):
    value: Optional[list[JournalLine]] = UNSET


class CompaniesApiJournalsApiJournalLinesResponseDict(TypedDict):
    value: NotRequired[list[JournalLineDict]]
