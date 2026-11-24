from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateProject2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateProject2Error:
    def map(self, status_code: int, content: bytes) -> UpdateProject2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_project2_error_mapper: Final[ErrorMapper[UpdateProject2ErrorBody]] = _UpdateProject2Error()
