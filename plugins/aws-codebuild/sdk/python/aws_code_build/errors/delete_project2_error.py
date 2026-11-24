from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteProject2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteProject2Error:
    def map(self, status_code: int, content: bytes) -> DeleteProject2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_project2_error_mapper: Final[ErrorMapper[DeleteProject2ErrorBody]] = _DeleteProject2Error()
