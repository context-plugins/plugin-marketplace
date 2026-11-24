from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartProjectVersionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartProjectVersionError:
    def map(self, status_code: int, content: bytes) -> StartProjectVersionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_project_version_error_mapper: Final[ErrorMapper[StartProjectVersionErrorBody]] = _StartProjectVersionError()
