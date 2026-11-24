from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

EventarcProjectsLocationsChannelsTestIamPermissionsErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _EventarcProjectsLocationsChannelsTestIamPermissionsError:
    def map(self, status_code: int, content: bytes) -> EventarcProjectsLocationsChannelsTestIamPermissionsErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


eventarc_projects_locations_channels_test_iam_permissions_error_mapper: Final[
    ErrorMapper[EventarcProjectsLocationsChannelsTestIamPermissionsErrorBody]
] = _EventarcProjectsLocationsChannelsTestIamPermissionsError()
