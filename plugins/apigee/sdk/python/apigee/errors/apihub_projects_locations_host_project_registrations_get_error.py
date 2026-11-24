from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApihubProjectsLocationsHostProjectRegistrationsGetErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApihubProjectsLocationsHostProjectRegistrationsGetError:
    def map(self, status_code: int, content: bytes) -> ApihubProjectsLocationsHostProjectRegistrationsGetErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apihub_projects_locations_host_project_registrations_get_error_mapper: Final[
    ErrorMapper[ApihubProjectsLocationsHostProjectRegistrationsGetErrorBody]
] = _ApihubProjectsLocationsHostProjectRegistrationsGetError()
