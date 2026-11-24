from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostErrorBody: TypeAlias = (
    ErrorResponse | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError:
    def map(self, status_code: int, content: bytes) -> RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 502 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


revoke_team_invitations_v2_team_invitations_batch_revoke_post_error_mapper: Final[
    ErrorMapper[RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostErrorBody]
] = _RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError()
