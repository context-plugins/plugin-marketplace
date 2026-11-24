from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SearchFacesByImage2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SearchFacesByImage2Error:
    def map(self, status_code: int, content: bytes) -> SearchFacesByImage2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


search_faces_by_image2_error_mapper: Final[ErrorMapper[SearchFacesByImage2ErrorBody]] = _SearchFacesByImage2Error()
