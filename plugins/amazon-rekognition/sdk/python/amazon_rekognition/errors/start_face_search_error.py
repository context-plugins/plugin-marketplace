from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartFaceSearchErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartFaceSearchError:
    def map(self, status_code: int, content: bytes) -> StartFaceSearchErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_face_search_error_mapper: Final[ErrorMapper[StartFaceSearchErrorBody]] = _StartFaceSearchError()
