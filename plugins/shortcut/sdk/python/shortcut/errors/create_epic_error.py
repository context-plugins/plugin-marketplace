from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateEpicErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateEpicError:
    def map(self, status_code: int, content: bytes) -> CreateEpicErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_epic_error_mapper: Final[ErrorMapper[CreateEpicErrorBody]] = _CreateEpicError()
