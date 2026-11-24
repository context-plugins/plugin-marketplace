from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError:
    def map(self, status_code: int, content: bytes) -> EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostErrorBody:
        match status_code:
            case 404 | 422:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


enrich_findall_run_v1_beta_findall_runs_findall_id_enrich_post_error_mapper: Final[
    ErrorMapper[EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostErrorBody]
] = _EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError()
