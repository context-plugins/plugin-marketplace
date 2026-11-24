from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdError:
    def map(self, status_code: int, content: bytes) -> GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_by_repo_slug_versions_by_version_id_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdErrorBody]
] = _GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdError()
