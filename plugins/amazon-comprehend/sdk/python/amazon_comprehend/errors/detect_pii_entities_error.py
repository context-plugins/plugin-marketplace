from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectPiiEntitiesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectPiiEntitiesError:
    def map(self, status_code: int, content: bytes) -> DetectPiiEntitiesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_pii_entities_error_mapper: Final[ErrorMapper[DetectPiiEntitiesErrorBody]] = _DetectPiiEntitiesError()
