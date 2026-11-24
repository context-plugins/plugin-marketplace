from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_leadspace_api_v4_enrichment_api import ErrorLeadspaceApiV4EnrichmentApi

EnrichBulkRecordsErrorBody: TypeAlias = ErrorLeadspaceApiV4EnrichmentApi | RawError


@dataclass(frozen=True, slots=True)
class _EnrichBulkRecordsError:
    def map(self, status_code: int, content: bytes) -> EnrichBulkRecordsErrorBody:
        match status_code:
            case 400 | 427 | 500:
                return decode_json[ErrorLeadspaceApiV4EnrichmentApi](content)
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


enrich_bulk_records_error_mapper: Final[ErrorMapper[EnrichBulkRecordsErrorBody]] = _EnrichBulkRecordsError()
