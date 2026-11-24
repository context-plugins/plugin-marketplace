from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError:
    def map(
        self, status_code: int, content: bytes
    ) -> EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


eventarc_projects_locations_google_api_sources_test_iam_permissions_error_mapper: Final[
    ErrorMapper[EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsErrorBody]
] = _EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError()
