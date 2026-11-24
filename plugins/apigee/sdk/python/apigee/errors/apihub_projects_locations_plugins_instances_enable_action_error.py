from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApihubProjectsLocationsPluginsInstancesEnableActionErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApihubProjectsLocationsPluginsInstancesEnableActionError:
    def map(self, status_code: int, content: bytes) -> ApihubProjectsLocationsPluginsInstancesEnableActionErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apihub_projects_locations_plugins_instances_enable_action_error_mapper: Final[
    ErrorMapper[ApihubProjectsLocationsPluginsInstancesEnableActionErrorBody]
] = _ApihubProjectsLocationsPluginsInstancesEnableActionError()
