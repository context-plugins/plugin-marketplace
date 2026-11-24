from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceByRepoSlugPatchBySpecErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceByRepoSlugPatchBySpecError:
    def map(self, status_code: int, content: bytes) -> GetRepositoriesByWorkspaceByRepoSlugPatchBySpecErrorBody:
        match status_code:
            case 555:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_by_repo_slug_patch_by_spec_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceByRepoSlugPatchBySpecErrorBody]
] = _GetRepositoriesByWorkspaceByRepoSlugPatchBySpecError()
