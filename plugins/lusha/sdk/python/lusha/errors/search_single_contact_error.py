from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

SearchSingleContactErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _SearchSingleContactError:
    def map(self, status_code: int, content: bytes) -> SearchSingleContactErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 451 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


search_single_contact_error_mapper: Final[ErrorMapper[SearchSingleContactErrorBody]] = _SearchSingleContactError()
