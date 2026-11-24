from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError:
    def map(
        self, status_code: int, content: bytes
    ) -> DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error_mapper: Final[
    ErrorMapper[DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody]
] = _DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError()
