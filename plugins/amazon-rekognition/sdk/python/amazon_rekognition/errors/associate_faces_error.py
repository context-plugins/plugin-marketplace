from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AssociateFacesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AssociateFacesError:
    def map(self, status_code: int, content: bytes) -> AssociateFacesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


associate_faces_error_mapper: Final[ErrorMapper[AssociateFacesErrorBody]] = _AssociateFacesError()
