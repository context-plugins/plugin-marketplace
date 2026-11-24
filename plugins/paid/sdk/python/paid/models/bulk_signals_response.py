from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BulkSignalsResponse(SdkBaseModel):
    ingested: int
    duplicates: int
    failed: int


class BulkSignalsResponseDict(TypedDict):
    ingested: int
    duplicates: int
    failed: int
