from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

DeleteWatchErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _DeleteWatchError:
    def map(self, status_code: int, content: bytes) -> DeleteWatchErrorBody:
        match status_code:
            case 404:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


delete_watch_error_mapper: Final[ErrorMapper[DeleteWatchErrorBody]] = _DeleteWatchError()
