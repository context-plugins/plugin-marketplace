from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateProjectVersionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateProjectVersionError:
    def map(self, status_code: int, content: bytes) -> CreateProjectVersionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_project_version_error_mapper: Final[ErrorMapper[CreateProjectVersionErrorBody]] = _CreateProjectVersionError()
