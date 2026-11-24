from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PostRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PostRepositoriesByWorkspaceByRepoSlugDeployKeysError:
    def map(self, status_code: int, content: bytes) -> PostRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody:
        match status_code:
            case 400 | 403:
                return RawError(status_code, content)
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


post_repositories_by_workspace_by_repo_slug_deploy_keys_error_mapper: Final[
    ErrorMapper[PostRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody]
] = _PostRepositoriesByWorkspaceByRepoSlugDeployKeysError()
