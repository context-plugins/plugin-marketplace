from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

CancelFindallRunV1BetaFindallRunsFindallIdCancelPostErrorBody: TypeAlias = (
    ErrorResponse | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError:
    def map(self, status_code: int, content: bytes) -> CancelFindallRunV1BetaFindallRunsFindallIdCancelPostErrorBody:
        match status_code:
            case 404 | 409:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


cancel_findall_run_v1_beta_findall_runs_findall_id_cancel_post_error_mapper: Final[
    ErrorMapper[CancelFindallRunV1BetaFindallRunsFindallIdCancelPostErrorBody]
] = _CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError()
