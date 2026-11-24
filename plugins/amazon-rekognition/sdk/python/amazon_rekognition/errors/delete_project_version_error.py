from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteProjectVersionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteProjectVersionError:
    def map(self, status_code: int, content: bytes) -> DeleteProjectVersionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_project_version_error_mapper: Final[ErrorMapper[DeleteProjectVersionErrorBody]] = _DeleteProjectVersionError()
