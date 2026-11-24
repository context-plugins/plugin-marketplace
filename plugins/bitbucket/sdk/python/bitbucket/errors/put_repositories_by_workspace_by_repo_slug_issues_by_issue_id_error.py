from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError:
    def map(self, status_code: int, content: bytes) -> PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error_mapper: Final[
    ErrorMapper[PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody]
] = _PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError()
