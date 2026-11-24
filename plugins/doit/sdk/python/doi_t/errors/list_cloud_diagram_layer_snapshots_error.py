from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListCloudDiagramLayerSnapshotsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListCloudDiagramLayerSnapshotsError:
    def map(self, status_code: int, content: bytes) -> ListCloudDiagramLayerSnapshotsErrorBody:
        match status_code:
            case 400 | 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_cloud_diagram_layer_snapshots_error_mapper: Final[
    ErrorMapper[ListCloudDiagramLayerSnapshotsErrorBody]
] = _ListCloudDiagramLayerSnapshotsError()
