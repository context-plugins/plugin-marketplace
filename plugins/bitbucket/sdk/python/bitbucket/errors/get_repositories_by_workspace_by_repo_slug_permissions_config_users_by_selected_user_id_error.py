from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError:
    def map(
        self, status_code: int, content: bytes
    ) -> GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody]
] = _GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError()
