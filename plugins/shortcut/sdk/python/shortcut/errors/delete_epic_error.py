from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteEpicErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteEpicError:
    def map(self, status_code: int, content: bytes) -> DeleteEpicErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_epic_error_mapper: Final[ErrorMapper[DeleteEpicErrorBody]] = _DeleteEpicError()
