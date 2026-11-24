from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetRepositoryErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoryError:
    def map(self, status_code: int, content: bytes) -> GetRepositoryErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_repository_error_mapper: Final[ErrorMapper[GetRepositoryErrorBody]] = _GetRepositoryError()
