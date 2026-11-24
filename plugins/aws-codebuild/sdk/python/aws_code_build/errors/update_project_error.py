from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateProjectErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateProjectError:
    def map(self, status_code: int, content: bytes) -> UpdateProjectErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_project_error_mapper: Final[ErrorMapper[UpdateProjectErrorBody]] = _UpdateProjectError()
