from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

SearchCloudDiagramsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _SearchCloudDiagramsError:
    def map(self, status_code: int, content: bytes) -> SearchCloudDiagramsErrorBody:
        match status_code:
            case 400 | 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


search_cloud_diagrams_error_mapper: Final[ErrorMapper[SearchCloudDiagramsErrorBody]] = _SearchCloudDiagramsError()
