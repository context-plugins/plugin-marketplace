from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetCurrentUserErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetCurrentUserError:
    def map(self, status_code: int, content: bytes) -> GetCurrentUserErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_current_user_error_mapper: Final[ErrorMapper[GetCurrentUserErrorBody]] = _GetCurrentUserError()
