from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateEpicHealthErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateEpicHealthError:
    def map(self, status_code: int, content: bytes) -> CreateEpicHealthErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_epic_health_error_mapper: Final[ErrorMapper[CreateEpicHealthErrorBody]] = _CreateEpicHealthError()
