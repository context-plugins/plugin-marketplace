from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetContactsBuyingGroupErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetContactsBuyingGroupError:
    def map(self, status_code: int, content: bytes) -> GetContactsBuyingGroupErrorBody:
        match status_code:
            case 400 | 401 | 402 | 403 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_contacts_buying_group_error_mapper: Final[
    ErrorMapper[GetContactsBuyingGroupErrorBody]
] = _GetContactsBuyingGroupError()
