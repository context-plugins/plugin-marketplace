from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BatchGetProjectsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BatchGetProjectsError:
    def map(self, status_code: int, content: bytes) -> BatchGetProjectsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


batch_get_projects_error_mapper: Final[ErrorMapper[BatchGetProjectsErrorBody]] = _BatchGetProjectsError()
