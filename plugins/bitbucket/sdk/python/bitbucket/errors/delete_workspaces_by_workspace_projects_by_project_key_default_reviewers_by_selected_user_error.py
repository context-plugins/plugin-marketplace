from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError:
    def map(
        self, status_code: int, content: bytes
    ) -> DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error_mapper: Final[
    ErrorMapper[DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody]
] = _DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError()
