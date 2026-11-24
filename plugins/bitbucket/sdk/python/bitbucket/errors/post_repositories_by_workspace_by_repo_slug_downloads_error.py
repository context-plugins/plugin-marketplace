from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PostRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PostRepositoriesByWorkspaceByRepoSlugDownloadsError:
    def map(self, status_code: int, content: bytes) -> PostRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody:
        match status_code:
            case 400 | 403 | 406:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


post_repositories_by_workspace_by_repo_slug_downloads_error_mapper: Final[
    ErrorMapper[PostRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody]
] = _PostRepositoriesByWorkspaceByRepoSlugDownloadsError()
