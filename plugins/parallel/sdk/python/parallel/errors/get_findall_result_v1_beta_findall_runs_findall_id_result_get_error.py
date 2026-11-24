from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

GetFindallResultV1BetaFindallRunsFindallIdResultGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetFindallResultV1BetaFindallRunsFindallIdResultGetError:
    def map(self, status_code: int, content: bytes) -> GetFindallResultV1BetaFindallRunsFindallIdResultGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_findall_result_v1_beta_findall_runs_findall_id_result_get_error_mapper: Final[
    ErrorMapper[GetFindallResultV1BetaFindallRunsFindallIdResultGetErrorBody]
] = _GetFindallResultV1BetaFindallRunsFindallIdResultGetError()
