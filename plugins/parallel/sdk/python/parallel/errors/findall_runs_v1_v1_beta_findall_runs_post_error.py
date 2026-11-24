from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

FindallRunsV1V1BetaFindallRunsPostErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _FindallRunsV1V1BetaFindallRunsPostError:
    def map(self, status_code: int, content: bytes) -> FindallRunsV1V1BetaFindallRunsPostErrorBody:
        match status_code:
            case 402 | 422 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


findall_runs_v1_v1_beta_findall_runs_post_error_mapper: Final[
    ErrorMapper[FindallRunsV1V1BetaFindallRunsPostErrorBody]
] = _FindallRunsV1V1BetaFindallRunsPostError()
