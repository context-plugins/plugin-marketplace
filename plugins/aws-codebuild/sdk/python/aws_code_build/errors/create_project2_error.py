from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateProject2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateProject2Error:
    def map(self, status_code: int, content: bytes) -> CreateProject2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_project2_error_mapper: Final[ErrorMapper[CreateProject2ErrorBody]] = _CreateProject2Error()
