from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectEntitiesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectEntitiesError:
    def map(self, status_code: int, content: bytes) -> DetectEntitiesErrorBody:
        match status_code:
            case 400 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_entities_error_mapper: Final[ErrorMapper[DetectEntitiesErrorBody]] = _DetectEntitiesError()
