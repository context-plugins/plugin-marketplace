from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

DatastreamProjectsLocationsConnectionProfilesCreateErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _DatastreamProjectsLocationsConnectionProfilesCreateError:
    def map(self, status_code: int, content: bytes) -> DatastreamProjectsLocationsConnectionProfilesCreateErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


datastream_projects_locations_connection_profiles_create_error_mapper: Final[
    ErrorMapper[DatastreamProjectsLocationsConnectionProfilesCreateErrorBody]
] = _DatastreamProjectsLocationsConnectionProfilesCreateError()
