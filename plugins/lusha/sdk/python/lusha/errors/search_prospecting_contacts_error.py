from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

SearchProspectingContactsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _SearchProspectingContactsError:
    def map(self, status_code: int, content: bytes) -> SearchProspectingContactsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


search_prospecting_contacts_error_mapper: Final[
    ErrorMapper[SearchProspectingContactsErrorBody]
] = _SearchProspectingContactsError()
