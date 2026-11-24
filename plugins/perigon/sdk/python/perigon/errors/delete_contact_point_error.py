from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

DeleteContactPointErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _DeleteContactPointError:
    def map(self, status_code: int, content: bytes) -> DeleteContactPointErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


delete_contact_point_error_mapper: Final[ErrorMapper[DeleteContactPointErrorBody]] = _DeleteContactPointError()
