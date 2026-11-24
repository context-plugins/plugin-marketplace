from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetDataFileStorageUsageV2DataUsageGetErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetDataFileStorageUsageV2DataUsageGetError:
    def map(self, status_code: int, content: bytes) -> GetDataFileStorageUsageV2DataUsageGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_data_file_storage_usage_v2_data_usage_get_error_mapper: Final[
    ErrorMapper[GetDataFileStorageUsageV2DataUsageGetErrorBody]
] = _GetDataFileStorageUsageV2DataUsageGetError()
