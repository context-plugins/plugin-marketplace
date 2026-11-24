from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteProjectErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteProjectError:
    def map(self, status_code: int, content: bytes) -> DeleteProjectErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_project_error_mapper: Final[ErrorMapper[DeleteProjectErrorBody]] = _DeleteProjectError()
