from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListUsersErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListUsersError:
    def map(self, status_code: int, content: bytes) -> ListUsersErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_users_error_mapper: Final[ErrorMapper[ListUsersErrorBody]] = _ListUsersError()
