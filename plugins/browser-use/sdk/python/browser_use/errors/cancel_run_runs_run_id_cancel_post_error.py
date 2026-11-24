from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

CancelRunRunsRunIdCancelPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _CancelRunRunsRunIdCancelPostError:
    def map(self, status_code: int, content: bytes) -> CancelRunRunsRunIdCancelPostErrorBody:
        match status_code:
            case 403 | 404 | 502 | 503:
                return RawError(status_code, content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


cancel_run_runs_run_id_cancel_post_error_mapper: Final[
    ErrorMapper[CancelRunRunsRunIdCancelPostErrorBody]
] = _CancelRunRunsRunIdCancelPostError()
