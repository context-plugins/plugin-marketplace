from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError:
    def map(self, status_code: int, content: bytes) -> PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


post_repositories_by_workspace_by_repo_slug_branch_restrictions_error_mapper: Final[
    ErrorMapper[PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody]
] = _PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError()
