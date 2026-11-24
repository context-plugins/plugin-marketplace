from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateEpicErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateEpicError:
    def map(self, status_code: int, content: bytes) -> UpdateEpicErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_epic_error_mapper: Final[ErrorMapper[UpdateEpicErrorBody]] = _UpdateEpicError()
