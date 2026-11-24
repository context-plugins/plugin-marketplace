from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetNewUsersFromOffice365ErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetNewUsersFromOffice365Error:
    def map(self, status_code: int, content: bytes) -> GetNewUsersFromOffice365ErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_new_users_from_office365_error_mapper: Final[
    ErrorMapper[GetNewUsersFromOffice365ErrorBody]
] = _GetNewUsersFromOffice365Error()
