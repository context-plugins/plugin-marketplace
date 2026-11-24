from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteUserErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteUserError:
    def map(self, status_code: int, content: bytes) -> DeleteUserErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_user_error_mapper: Final[ErrorMapper[DeleteUserErrorBody]] = _DeleteUserError()
