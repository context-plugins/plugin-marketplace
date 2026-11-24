from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

CancelUserJobsV2RolloutsCancelUserJobsPostErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _CancelUserJobsV2RolloutsCancelUserJobsPostError:
    def map(self, status_code: int, content: bytes) -> CancelUserJobsV2RolloutsCancelUserJobsPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


cancel_user_jobs_v2_rollouts_cancel_user_jobs_post_error_mapper: Final[
    ErrorMapper[CancelUserJobsV2RolloutsCancelUserJobsPostErrorBody]
] = _CancelUserJobsV2RolloutsCancelUserJobsPostError()
