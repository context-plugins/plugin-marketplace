from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError:
    def map(
        self, status_code: int, content: bytes
    ) -> GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody]
] = _GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError()
