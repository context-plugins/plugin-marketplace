from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enrichment_result import EnrichmentResult, EnrichmentResultDict


class BulkResults(SdkBaseModel):
    results: Optional[list[EnrichmentResult]] = UNSET


class BulkResultsDict(TypedDict):
    results: NotRequired[list[EnrichmentResultDict]]
