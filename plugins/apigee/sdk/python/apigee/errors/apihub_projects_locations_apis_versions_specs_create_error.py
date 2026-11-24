from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApihubProjectsLocationsApisVersionsSpecsCreateErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApihubProjectsLocationsApisVersionsSpecsCreateError:
    def map(self, status_code: int, content: bytes) -> ApihubProjectsLocationsApisVersionsSpecsCreateErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apihub_projects_locations_apis_versions_specs_create_error_mapper: Final[
    ErrorMapper[ApihubProjectsLocationsApisVersionsSpecsCreateErrorBody]
] = _ApihubProjectsLocationsApisVersionsSpecsCreateError()
