from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetGroupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetGroupError:
    def map(self, status_code: int, content: bytes) -> GetGroupErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_group_error_mapper: Final[ErrorMapper[GetGroupErrorBody]] = _GetGroupError()
