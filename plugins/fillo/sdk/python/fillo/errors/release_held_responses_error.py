from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ReleaseHeldResponsesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ReleaseHeldResponsesError:
    def map(self, status_code: int, content: bytes) -> ReleaseHeldResponsesErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 413 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


release_held_responses_error_mapper: Final[ErrorMapper[ReleaseHeldResponsesErrorBody]] = _ReleaseHeldResponsesError()
