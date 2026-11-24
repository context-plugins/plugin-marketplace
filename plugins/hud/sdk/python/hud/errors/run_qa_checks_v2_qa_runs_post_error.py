from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

RunQaChecksV2QaRunsPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _RunQaChecksV2QaRunsPostError:
    def map(self, status_code: int, content: bytes) -> RunQaChecksV2QaRunsPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


run_qa_checks_v2_qa_runs_post_error_mapper: Final[
    ErrorMapper[RunQaChecksV2QaRunsPostErrorBody]
] = _RunQaChecksV2QaRunsPostError()
