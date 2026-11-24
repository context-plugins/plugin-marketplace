from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

OverridesControllerFindOneErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _OverridesControllerFindOneError:
    def map(self, status_code: int, content: bytes) -> OverridesControllerFindOneErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


overrides_controller_find_one_error_mapper: Final[
    ErrorMapper[OverridesControllerFindOneErrorBody]
] = _OverridesControllerFindOneError()
