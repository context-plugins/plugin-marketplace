from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateProjectVisibilityErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateProjectVisibilityError:
    def map(self, status_code: int, content: bytes) -> UpdateProjectVisibilityErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_project_visibility_error_mapper: Final[
    ErrorMapper[UpdateProjectVisibilityErrorBody]
] = _UpdateProjectVisibilityError()
