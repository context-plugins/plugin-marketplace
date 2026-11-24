from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Error:
    def map(self, status_code: int, content: bytes) -> GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2ErrorBody:
        match status_code:
            case 404 | 555:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2ErrorBody]
] = _GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Error()
