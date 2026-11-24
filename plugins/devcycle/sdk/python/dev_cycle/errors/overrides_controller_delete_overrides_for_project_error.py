from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

OverridesControllerDeleteOverridesForProjectErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _OverridesControllerDeleteOverridesForProjectError:
    def map(self, status_code: int, content: bytes) -> OverridesControllerDeleteOverridesForProjectErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


overrides_controller_delete_overrides_for_project_error_mapper: Final[
    ErrorMapper[OverridesControllerDeleteOverridesForProjectErrorBody]
] = _OverridesControllerDeleteOverridesForProjectError()
