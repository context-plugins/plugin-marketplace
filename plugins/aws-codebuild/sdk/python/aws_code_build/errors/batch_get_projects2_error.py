from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BatchGetProjects2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BatchGetProjects2Error:
    def map(self, status_code: int, content: bytes) -> BatchGetProjects2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


batch_get_projects2_error_mapper: Final[ErrorMapper[BatchGetProjects2ErrorBody]] = _BatchGetProjects2Error()
