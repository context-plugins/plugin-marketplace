from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListWorkspaceMembersErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListWorkspaceMembersError:
    def map(self, status_code: int, content: bytes) -> ListWorkspaceMembersErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_workspace_members_error_mapper: Final[ErrorMapper[ListWorkspaceMembersErrorBody]] = _ListWorkspaceMembersError()
