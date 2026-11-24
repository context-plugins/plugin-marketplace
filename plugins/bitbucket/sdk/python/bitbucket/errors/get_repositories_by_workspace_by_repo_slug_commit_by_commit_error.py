from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceByRepoSlugCommitByCommitErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceByRepoSlugCommitByCommitError:
    def map(self, status_code: int, content: bytes) -> GetRepositoriesByWorkspaceByRepoSlugCommitByCommitErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_by_repo_slug_commit_by_commit_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceByRepoSlugCommitByCommitErrorBody]
] = _GetRepositoriesByWorkspaceByRepoSlugCommitByCommitError()
