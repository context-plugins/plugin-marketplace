from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

IndexFacesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _IndexFacesError:
    def map(self, status_code: int, content: bytes) -> IndexFacesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


index_faces_error_mapper: Final[ErrorMapper[IndexFacesErrorBody]] = _IndexFacesError()
