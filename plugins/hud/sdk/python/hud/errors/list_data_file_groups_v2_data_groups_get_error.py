from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListDataFileGroupsV2DataGroupsGetErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListDataFileGroupsV2DataGroupsGetError:
    def map(self, status_code: int, content: bytes) -> ListDataFileGroupsV2DataGroupsGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_data_file_groups_v2_data_groups_get_error_mapper: Final[
    ErrorMapper[ListDataFileGroupsV2DataGroupsGetErrorBody]
] = _ListDataFileGroupsV2DataGroupsGetError()
