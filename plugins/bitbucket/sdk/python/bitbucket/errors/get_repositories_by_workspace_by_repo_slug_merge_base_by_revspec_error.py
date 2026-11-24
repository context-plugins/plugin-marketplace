from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecError:
    def map(self, status_code: int, content: bytes) -> GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecErrorBody]
] = _GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecError()
