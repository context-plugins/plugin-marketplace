from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

DatastreamProjectsLocationsFetchStaticIpsErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _DatastreamProjectsLocationsFetchStaticIpsError:
    def map(self, status_code: int, content: bytes) -> DatastreamProjectsLocationsFetchStaticIpsErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


datastream_projects_locations_fetch_static_ips_error_mapper: Final[
    ErrorMapper[DatastreamProjectsLocationsFetchStaticIpsErrorBody]
] = _DatastreamProjectsLocationsFetchStaticIpsError()
