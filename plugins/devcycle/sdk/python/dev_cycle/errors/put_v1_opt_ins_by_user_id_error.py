from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

PutV1OptInsByUserIdErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PutV1OptInsByUserIdError:
    def map(self, status_code: int, content: bytes) -> PutV1OptInsByUserIdErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


put_v1_opt_ins_by_user_id_error_mapper: Final[ErrorMapper[PutV1OptInsByUserIdErrorBody]] = _PutV1OptInsByUserIdError()
