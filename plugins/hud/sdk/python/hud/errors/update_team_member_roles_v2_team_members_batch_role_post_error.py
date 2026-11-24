from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

UpdateTeamMemberRolesV2TeamMembersBatchRolePostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _UpdateTeamMemberRolesV2TeamMembersBatchRolePostError:
    def map(self, status_code: int, content: bytes) -> UpdateTeamMemberRolesV2TeamMembersBatchRolePostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 502 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


update_team_member_roles_v2_team_members_batch_role_post_error_mapper: Final[
    ErrorMapper[UpdateTeamMemberRolesV2TeamMembersBatchRolePostErrorBody]
] = _UpdateTeamMemberRolesV2TeamMembersBatchRolePostError()
