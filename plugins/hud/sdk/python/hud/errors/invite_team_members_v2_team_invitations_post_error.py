from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

InviteTeamMembersV2TeamInvitationsPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _InviteTeamMembersV2TeamInvitationsPostError:
    def map(self, status_code: int, content: bytes) -> InviteTeamMembersV2TeamInvitationsPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 502 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


invite_team_members_v2_team_invitations_post_error_mapper: Final[
    ErrorMapper[InviteTeamMembersV2TeamInvitationsPostErrorBody]
] = _InviteTeamMembersV2TeamInvitationsPostError()
