from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetContactPointErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetContactPointError:
    def map(self, status_code: int, content: bytes) -> GetContactPointErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_contact_point_error_mapper: Final[ErrorMapper[GetContactPointErrorBody]] = _GetContactPointError()
