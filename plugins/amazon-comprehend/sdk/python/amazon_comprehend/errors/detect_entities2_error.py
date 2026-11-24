from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectEntities2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectEntities2Error:
    def map(self, status_code: int, content: bytes) -> DetectEntities2ErrorBody:
        match status_code:
            case 400 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_entities2_error_mapper: Final[ErrorMapper[DetectEntities2ErrorBody]] = _DetectEntities2Error()
