from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetApiV1DataStandardsDataStandardIdChecksErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1DataStandardsDataStandardIdChecksError:
    def map(self, status_code: int, content: bytes) -> GetApiV1DataStandardsDataStandardIdChecksErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_api_v1_data_standards_data_standard_id_checks_error_mapper: Final[
    ErrorMapper[GetApiV1DataStandardsDataStandardIdChecksErrorBody]
] = _GetApiV1DataStandardsDataStandardIdChecksError()
