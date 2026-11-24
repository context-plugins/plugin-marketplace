from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeError:
    def map(
        self, status_code: int, content: bytes
    ) -> PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeErrorBody:
        match status_code:
            case 409:
                return RawError(status_code, content)
            case 555:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_error_mapper: Final[
    ErrorMapper[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeErrorBody]
] = _PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeError()
