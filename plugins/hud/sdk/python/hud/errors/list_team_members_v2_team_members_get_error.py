from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListTeamMembersV2TeamMembersGetErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListTeamMembersV2TeamMembersGetError:
    def map(self, status_code: int, content: bytes) -> ListTeamMembersV2TeamMembersGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_team_members_v2_team_members_get_error_mapper: Final[
    ErrorMapper[ListTeamMembersV2TeamMembersGetErrorBody]
] = _ListTeamMembersV2TeamMembersGetError()
