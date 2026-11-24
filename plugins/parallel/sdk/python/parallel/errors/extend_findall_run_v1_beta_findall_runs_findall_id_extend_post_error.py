from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError:
    def map(self, status_code: int, content: bytes) -> ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostErrorBody:
        match status_code:
            case 404 | 422:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


extend_findall_run_v1_beta_findall_runs_findall_id_extend_post_error_mapper: Final[
    ErrorMapper[ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostErrorBody]
] = _ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError()
