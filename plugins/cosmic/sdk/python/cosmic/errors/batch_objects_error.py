from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

BatchObjectsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _BatchObjectsError:
    def map(self, status_code: int, content: bytes) -> BatchObjectsErrorBody:
        match status_code:
            case 400 | 401 | 402 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


batch_objects_error_mapper: Final[ErrorMapper[BatchObjectsErrorBody]] = _BatchObjectsError()
