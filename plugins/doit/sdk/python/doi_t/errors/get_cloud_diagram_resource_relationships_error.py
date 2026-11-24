from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetCloudDiagramResourceRelationshipsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetCloudDiagramResourceRelationshipsError:
    def map(self, status_code: int, content: bytes) -> GetCloudDiagramResourceRelationshipsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_cloud_diagram_resource_relationships_error_mapper: Final[
    ErrorMapper[GetCloudDiagramResourceRelationshipsErrorBody]
] = _GetCloudDiagramResourceRelationshipsError()
