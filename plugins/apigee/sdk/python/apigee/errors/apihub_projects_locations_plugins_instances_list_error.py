from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApihubProjectsLocationsPluginsInstancesListErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApihubProjectsLocationsPluginsInstancesListError:
    def map(self, status_code: int, content: bytes) -> ApihubProjectsLocationsPluginsInstancesListErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apihub_projects_locations_plugins_instances_list_error_mapper: Final[
    ErrorMapper[ApihubProjectsLocationsPluginsInstancesListErrorBody]
] = _ApihubProjectsLocationsPluginsInstancesListError()
