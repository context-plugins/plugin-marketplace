from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteFacesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteFacesError:
    def map(self, status_code: int, content: bytes) -> DeleteFacesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_faces_error_mapper: Final[ErrorMapper[DeleteFacesErrorBody]] = _DeleteFacesError()
