from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError:
    def map(
        self, status_code: int, content: bytes
    ) -> PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve_error_mapper: Final[
    ErrorMapper[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody]
] = _PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError()
