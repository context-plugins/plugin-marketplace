from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListCloudDiagramNodeActivitiesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListCloudDiagramNodeActivitiesError:
    def map(self, status_code: int, content: bytes) -> ListCloudDiagramNodeActivitiesErrorBody:
        match status_code:
            case 400 | 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_cloud_diagram_node_activities_error_mapper: Final[
    ErrorMapper[ListCloudDiagramNodeActivitiesErrorBody]
] = _ListCloudDiagramNodeActivitiesError()
