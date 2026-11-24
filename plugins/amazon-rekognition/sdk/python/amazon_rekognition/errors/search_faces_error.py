from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SearchFacesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SearchFacesError:
    def map(self, status_code: int, content: bytes) -> SearchFacesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


search_faces_error_mapper: Final[ErrorMapper[SearchFacesErrorBody]] = _SearchFacesError()
