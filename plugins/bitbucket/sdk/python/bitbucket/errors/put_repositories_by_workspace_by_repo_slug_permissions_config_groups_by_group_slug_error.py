from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError:
    def map(
        self, status_code: int, content: bytes
    ) -> PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody:
        match status_code:
            case 400 | 401 | 402 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error_mapper: Final[
    ErrorMapper[PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody]
] = _PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError()
