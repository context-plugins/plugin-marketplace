from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody: TypeAlias = (
    Error | RawError
)


@dataclass(frozen=True, slots=True)
class _PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError:
    def map(
        self, status_code: int, content: bytes
    ) -> PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error_mapper: Final[
    ErrorMapper[PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody]
] = _PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError()
