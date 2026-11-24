from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CancelWorkspaceInvitationErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CancelWorkspaceInvitationError:
    def map(self, status_code: int, content: bytes) -> CancelWorkspaceInvitationErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


cancel_workspace_invitation_error_mapper: Final[
    ErrorMapper[CancelWorkspaceInvitationErrorBody]
] = _CancelWorkspaceInvitationError()
