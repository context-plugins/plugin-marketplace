from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetProjectErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetProjectError:
    def map(self, status_code: int, content: bytes) -> GetProjectErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_project_error_mapper: Final[ErrorMapper[GetProjectErrorBody]] = _GetProjectError()
