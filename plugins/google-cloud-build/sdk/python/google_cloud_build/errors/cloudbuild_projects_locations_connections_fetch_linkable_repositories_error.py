from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError:
    def map(
        self, status_code: int, content: bytes
    ) -> CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


cloudbuild_projects_locations_connections_fetch_linkable_repositories_error_mapper: Final[
    ErrorMapper[CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesErrorBody]
] = _CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError()
