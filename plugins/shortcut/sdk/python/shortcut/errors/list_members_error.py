from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListMembersErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListMembersError:
    def map(self, status_code: int, content: bytes) -> ListMembersErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_members_error_mapper: Final[ErrorMapper[ListMembersErrorBody]] = _ListMembersError()
