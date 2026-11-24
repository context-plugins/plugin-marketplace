from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetContactDataPointsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetContactDataPointsError:
    def map(self, status_code: int, content: bytes) -> GetContactDataPointsErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_contact_data_points_error_mapper: Final[ErrorMapper[GetContactDataPointsErrorBody]] = _GetContactDataPointsError()
