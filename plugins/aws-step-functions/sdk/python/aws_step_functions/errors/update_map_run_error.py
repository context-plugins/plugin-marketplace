from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateMapRunErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateMapRunError:
    def map(self, status_code: int, content: bytes) -> UpdateMapRunErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_map_run_error_mapper: Final[ErrorMapper[UpdateMapRunErrorBody]] = _UpdateMapRunError()
