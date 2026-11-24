from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

InviteWorkspaceMemberErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _InviteWorkspaceMemberError:
    def map(self, status_code: int, content: bytes) -> InviteWorkspaceMemberErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 413 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


invite_workspace_member_error_mapper: Final[ErrorMapper[InviteWorkspaceMemberErrorBody]] = _InviteWorkspaceMemberError()
