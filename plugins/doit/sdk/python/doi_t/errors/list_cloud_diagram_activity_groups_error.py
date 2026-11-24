from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListCloudDiagramActivityGroupsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListCloudDiagramActivityGroupsError:
    def map(self, status_code: int, content: bytes) -> ListCloudDiagramActivityGroupsErrorBody:
        match status_code:
            case 400 | 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_cloud_diagram_activity_groups_error_mapper: Final[
    ErrorMapper[ListCloudDiagramActivityGroupsErrorBody]
] = _ListCloudDiagramActivityGroupsError()
