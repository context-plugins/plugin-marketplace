from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

CloudtasksProjectsLocationsQueuesTasksRunErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _CloudtasksProjectsLocationsQueuesTasksRunError:
    def map(self, status_code: int, content: bytes) -> CloudtasksProjectsLocationsQueuesTasksRunErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


cloudtasks_projects_locations_queues_tasks_run_error_mapper: Final[
    ErrorMapper[CloudtasksProjectsLocationsQueuesTasksRunErrorBody]
] = _CloudtasksProjectsLocationsQueuesTasksRunError()
