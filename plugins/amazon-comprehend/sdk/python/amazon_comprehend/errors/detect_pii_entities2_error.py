from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectPiiEntities2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectPiiEntities2Error:
    def map(self, status_code: int, content: bytes) -> DetectPiiEntities2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_pii_entities2_error_mapper: Final[ErrorMapper[DetectPiiEntities2ErrorBody]] = _DetectPiiEntities2Error()
