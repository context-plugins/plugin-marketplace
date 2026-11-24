from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

IngestFindallRunV1BetaFindallIngestPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _IngestFindallRunV1BetaFindallIngestPostError:
    def map(self, status_code: int, content: bytes) -> IngestFindallRunV1BetaFindallIngestPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


ingest_findall_run_v1_beta_findall_ingest_post_error_mapper: Final[
    ErrorMapper[IngestFindallRunV1BetaFindallIngestPostErrorBody]
] = _IngestFindallRunV1BetaFindallIngestPostError()
