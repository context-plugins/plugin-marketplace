from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_dto import ErrorResponseDto

CreateCompassEventErrorBody: TypeAlias = ErrorResponseDto | RawError


@dataclass(frozen=True, slots=True)
class _CreateCompassEventError:
    def map(self, status_code: int, content: bytes) -> CreateCompassEventErrorBody:
        match status_code:
            case 400 | 404:
                return decode_json[ErrorResponseDto](content)
            case 429:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_compass_event_error_mapper: Final[ErrorMapper[CreateCompassEventErrorBody]] = _CreateCompassEventError()
