from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CompareFacesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CompareFacesError:
    def map(self, status_code: int, content: bytes) -> CompareFacesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


compare_faces_error_mapper: Final[ErrorMapper[CompareFacesErrorBody]] = _CompareFacesError()
