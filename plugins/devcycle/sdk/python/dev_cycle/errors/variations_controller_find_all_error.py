from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

VariationsControllerFindAllErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _VariationsControllerFindAllError:
    def map(self, status_code: int, content: bytes) -> VariationsControllerFindAllErrorBody:
        match status_code:
            case 401 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


variations_controller_find_all_error_mapper: Final[
    ErrorMapper[VariationsControllerFindAllErrorBody]
] = _VariationsControllerFindAllError()
