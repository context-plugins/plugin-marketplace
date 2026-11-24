from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetFaceSearchErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetFaceSearchError:
    def map(self, status_code: int, content: bytes) -> GetFaceSearchErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_face_search_error_mapper: Final[ErrorMapper[GetFaceSearchErrorBody]] = _GetFaceSearchError()
