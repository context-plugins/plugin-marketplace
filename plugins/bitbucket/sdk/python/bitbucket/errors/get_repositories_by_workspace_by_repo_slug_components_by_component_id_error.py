from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdError:
    def map(
        self, status_code: int, content: bytes
    ) -> GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_by_repo_slug_components_by_component_id_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdErrorBody]
] = _GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdError()
