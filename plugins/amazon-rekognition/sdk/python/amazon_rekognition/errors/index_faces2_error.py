from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

IndexFaces2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _IndexFaces2Error:
    def map(self, status_code: int, content: bytes) -> IndexFaces2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


index_faces2_error_mapper: Final[ErrorMapper[IndexFaces2ErrorBody]] = _IndexFaces2Error()
