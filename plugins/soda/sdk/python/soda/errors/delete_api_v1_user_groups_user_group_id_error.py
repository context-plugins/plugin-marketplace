from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

DeleteApiV1UserGroupsUserGroupIdErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _DeleteApiV1UserGroupsUserGroupIdError:
    def map(self, status_code: int, content: bytes) -> DeleteApiV1UserGroupsUserGroupIdErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


delete_api_v1_user_groups_user_group_id_error_mapper: Final[
    ErrorMapper[DeleteApiV1UserGroupsUserGroupIdErrorBody]
] = _DeleteApiV1UserGroupsUserGroupIdError()
