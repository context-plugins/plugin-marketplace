from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesError:
    def map(
        self, status_code: int, content: bytes
    ) -> GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesErrorBody]
] = _GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesError()
