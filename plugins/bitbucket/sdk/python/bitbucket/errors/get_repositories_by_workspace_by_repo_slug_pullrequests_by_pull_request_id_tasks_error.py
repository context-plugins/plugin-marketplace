from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError:
    def map(
        self, status_code: int, content: bytes
    ) -> GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody]
] = _GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError()
