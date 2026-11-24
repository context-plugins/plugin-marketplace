from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

UpdateContactPointErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _UpdateContactPointError:
    def map(self, status_code: int, content: bytes) -> UpdateContactPointErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


update_contact_point_error_mapper: Final[ErrorMapper[UpdateContactPointErrorBody]] = _UpdateContactPointError()
