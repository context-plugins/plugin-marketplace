from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityError:
    def map(
        self, status_code: int, content: bytes
    ) -> GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityErrorBody]
] = _GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityError()
