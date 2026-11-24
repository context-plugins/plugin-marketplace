from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

PatchV1EdgedbByUserIdErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PatchV1EdgedbByUserIdError:
    def map(self, status_code: int, content: bytes) -> PatchV1EdgedbByUserIdErrorBody:
        match status_code:
            case 400 | 401 | 404 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


patch_v1_edgedb_by_user_id_error_mapper: Final[
    ErrorMapper[PatchV1EdgedbByUserIdErrorBody]
] = _PatchV1EdgedbByUserIdError()
