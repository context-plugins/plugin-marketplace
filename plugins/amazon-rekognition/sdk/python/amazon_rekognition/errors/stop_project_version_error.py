from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StopProjectVersionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StopProjectVersionError:
    def map(self, status_code: int, content: bytes) -> StopProjectVersionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


stop_project_version_error_mapper: Final[ErrorMapper[StopProjectVersionErrorBody]] = _StopProjectVersionError()
