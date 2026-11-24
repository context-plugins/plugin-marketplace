from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetContactByIdErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetContactByIdError:
    def map(self, status_code: int, content: bytes) -> GetContactByIdErrorBody:
        match status_code:
            case 403 | 404 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_contact_by_id_error_mapper: Final[ErrorMapper[GetContactByIdErrorBody]] = _GetContactByIdError()
