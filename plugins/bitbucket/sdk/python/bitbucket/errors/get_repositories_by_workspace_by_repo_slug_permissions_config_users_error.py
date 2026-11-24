from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersError:
    def map(
        self, status_code: int, content: bytes
    ) -> GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_by_repo_slug_permissions_config_users_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersErrorBody]
] = _GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersError()
