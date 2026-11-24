from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetCloudDiagramLayerSnapshotErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetCloudDiagramLayerSnapshotError:
    def map(self, status_code: int, content: bytes) -> GetCloudDiagramLayerSnapshotErrorBody:
        match status_code:
            case 400 | 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_cloud_diagram_layer_snapshot_error_mapper: Final[
    ErrorMapper[GetCloudDiagramLayerSnapshotErrorBody]
] = _GetCloudDiagramLayerSnapshotError()
