from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_leadspace_api_v4_enrichment_api import ErrorLeadspaceApiV4EnrichmentApi

EnrichSingleRecordErrorBody: TypeAlias = ErrorLeadspaceApiV4EnrichmentApi | RawError


@dataclass(frozen=True, slots=True)
class _EnrichSingleRecordError:
    def map(self, status_code: int, content: bytes) -> EnrichSingleRecordErrorBody:
        match status_code:
            case 400 | 427 | 500:
                return decode_json[ErrorLeadspaceApiV4EnrichmentApi](content)
            case 401 | 405 | 415 | 429:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


enrich_single_record_error_mapper: Final[ErrorMapper[EnrichSingleRecordErrorBody]] = _EnrichSingleRecordError()
