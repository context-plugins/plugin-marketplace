from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError:
    def map(
        self, status_code: int, content: bytes
    ) -> CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


cloudbuild_projects_locations_connections_repositories_fetch_git_refs_error_mapper: Final[
    ErrorMapper[CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsErrorBody]
] = _CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError()
