from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathError:
    def map(
        self, status_code: int, content: bytes
    ) -> GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathErrorBody]
] = _GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathError()
