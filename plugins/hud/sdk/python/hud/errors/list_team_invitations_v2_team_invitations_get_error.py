from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListTeamInvitationsV2TeamInvitationsGetErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListTeamInvitationsV2TeamInvitationsGetError:
    def map(self, status_code: int, content: bytes) -> ListTeamInvitationsV2TeamInvitationsGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 502 | 503:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_team_invitations_v2_team_invitations_get_error_mapper: Final[
    ErrorMapper[ListTeamInvitationsV2TeamInvitationsGetErrorBody]
] = _ListTeamInvitationsV2TeamInvitationsGetError()
