from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentError:
    def map(
        self, status_code: int, content: bytes
    ) -> ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apihub_projects_locations_apis_versions_specs_fetch_additional_spec_content_error_mapper: Final[
    ErrorMapper[ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentErrorBody]
] = _ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentError()
