from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetUserWorkspacesByWorkspacePermissionsRepositoriesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetUserWorkspacesByWorkspacePermissionsRepositoriesError:
    def map(self, status_code: int, content: bytes) -> GetUserWorkspacesByWorkspacePermissionsRepositoriesErrorBody:
        match status_code:
            case 400 | 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_user_workspaces_by_workspace_permissions_repositories_error_mapper: Final[
    ErrorMapper[GetUserWorkspacesByWorkspacePermissionsRepositoriesErrorBody]
] = _GetUserWorkspacesByWorkspacePermissionsRepositoriesError()
