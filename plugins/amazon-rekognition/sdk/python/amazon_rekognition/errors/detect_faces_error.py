from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectFacesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectFacesError:
    def map(self, status_code: int, content: bytes) -> DetectFacesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_faces_error_mapper: Final[ErrorMapper[DetectFacesErrorBody]] = _DetectFacesError()
