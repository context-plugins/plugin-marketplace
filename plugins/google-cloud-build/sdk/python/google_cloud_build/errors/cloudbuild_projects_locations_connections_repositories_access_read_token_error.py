from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError:
    def map(
        self, status_code: int, content: bytes
    ) -> CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


cloudbuild_projects_locations_connections_repositories_access_read_token_error_mapper: Final[
    ErrorMapper[CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenErrorBody]
] = _CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError()
