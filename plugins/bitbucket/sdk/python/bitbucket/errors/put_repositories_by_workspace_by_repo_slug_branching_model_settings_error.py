from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError:
    def map(
        self, status_code: int, content: bytes
    ) -> PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


put_repositories_by_workspace_by_repo_slug_branching_model_settings_error_mapper: Final[
    ErrorMapper[PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody]
] = _PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError()
