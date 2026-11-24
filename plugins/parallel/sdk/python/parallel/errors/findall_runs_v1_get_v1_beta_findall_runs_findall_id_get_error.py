from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

FindallRunsV1GetV1BetaFindallRunsFindallIdGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _FindallRunsV1GetV1BetaFindallRunsFindallIdGetError:
    def map(self, status_code: int, content: bytes) -> FindallRunsV1GetV1BetaFindallRunsFindallIdGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


findall_runs_v1_get_v1_beta_findall_runs_findall_id_get_error_mapper: Final[
    ErrorMapper[FindallRunsV1GetV1BetaFindallRunsFindallIdGetErrorBody]
] = _FindallRunsV1GetV1BetaFindallRunsFindallIdGetError()
