from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugError:
    def map(
        self, status_code: int, content: bytes
    ) -> GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugErrorBody:
        match status_code:
            case 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_workspaces_by_workspace_permissions_repositories_by_repo_slug_error_mapper: Final[
    ErrorMapper[GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugErrorBody]
] = _GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugError()
