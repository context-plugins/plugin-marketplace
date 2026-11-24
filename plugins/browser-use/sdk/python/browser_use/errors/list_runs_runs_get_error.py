from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

ListRunsRunsGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _ListRunsRunsGetError:
    def map(self, status_code: int, content: bytes) -> ListRunsRunsGetErrorBody:
        match status_code:
            case 400 | 403:
                return RawError(status_code, content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


list_runs_runs_get_error_mapper: Final[ErrorMapper[ListRunsRunsGetErrorBody]] = _ListRunsRunsGetError()
