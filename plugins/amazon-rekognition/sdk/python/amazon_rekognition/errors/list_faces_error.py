from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListFacesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListFacesError:
    def map(self, status_code: int, content: bytes) -> ListFacesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_faces_error_mapper: Final[ErrorMapper[ListFacesErrorBody]] = _ListFacesError()
