from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

TimeEpTimeGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _TimeEpTimeGetError:
    def map(self, status_code: int, content: bytes) -> TimeEpTimeGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


time_ep_time_get_error_mapper: Final[ErrorMapper[TimeEpTimeGetErrorBody]] = _TimeEpTimeGetError()
