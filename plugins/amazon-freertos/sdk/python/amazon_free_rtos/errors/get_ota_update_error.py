from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetOtaUpdateErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetOtaUpdateError:
    def map(self, status_code: int, content: bytes) -> GetOtaUpdateErrorBody:
        match status_code:
            case 400 | 404 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_ota_update_error_mapper: Final[ErrorMapper[GetOtaUpdateErrorBody]] = _GetOtaUpdateError()
