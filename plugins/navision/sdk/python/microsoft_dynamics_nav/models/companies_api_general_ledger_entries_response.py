from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .general_ledger_entry import GeneralLedgerEntry, GeneralLedgerEntryDict


class CompaniesApiGeneralLedgerEntriesResponse(SdkBaseModel):
    value: Optional[list[GeneralLedgerEntry]] = UNSET


class CompaniesApiGeneralLedgerEntriesResponseDict(TypedDict):
    value: NotRequired[list[GeneralLedgerEntryDict]]
