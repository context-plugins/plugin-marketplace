from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathError:
    def map(self, status_code: int, content: bytes) -> GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathErrorBody:
        match status_code:
            case 404 | 555:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathErrorBody]
] = _GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathError()
