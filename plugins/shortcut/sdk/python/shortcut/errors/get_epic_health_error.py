from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetEpicHealthErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetEpicHealthError:
    def map(self, status_code: int, content: bytes) -> GetEpicHealthErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_epic_health_error_mapper: Final[ErrorMapper[GetEpicHealthErrorBody]] = _GetEpicHealthError()
