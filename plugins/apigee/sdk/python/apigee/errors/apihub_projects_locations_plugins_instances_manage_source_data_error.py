from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApihubProjectsLocationsPluginsInstancesManageSourceDataErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApihubProjectsLocationsPluginsInstancesManageSourceDataError:
    def map(self, status_code: int, content: bytes) -> ApihubProjectsLocationsPluginsInstancesManageSourceDataErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apihub_projects_locations_plugins_instances_manage_source_data_error_mapper: Final[
    ErrorMapper[ApihubProjectsLocationsPluginsInstancesManageSourceDataErrorBody]
] = _ApihubProjectsLocationsPluginsInstancesManageSourceDataError()
