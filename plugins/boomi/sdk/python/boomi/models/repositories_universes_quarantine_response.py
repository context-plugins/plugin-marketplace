from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .quarantine_entry import QuarantineEntry, QuarantineEntryDict


class RepositoriesUniversesQuarantineResponse(SdkBaseModel):
    records: Optional[list[QuarantineEntry]] = UNSET


class RepositoriesUniversesQuarantineResponseDict(TypedDict):
    records: NotRequired[list[QuarantineEntryDict]]
