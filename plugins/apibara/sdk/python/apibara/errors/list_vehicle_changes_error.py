from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel
from ..models.change_cursor_expired_response import ChangeCursorExpiredResponse

ListVehicleChangesErrorBody: TypeAlias = ApiErrorModel | ChangeCursorExpiredResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListVehicleChangesError:
    def map(self, status_code: int, content: bytes) -> ListVehicleChangesErrorBody:
        match status_code:
            case 401 | 422:
                return decode_json[ApiErrorModel](content)
            case 410:
                return decode_json[ChangeCursorExpiredResponse](content)
            case _:
                return RawError(status_code, content)


list_vehicle_changes_error_mapper: Final[ErrorMapper[ListVehicleChangesErrorBody]] = _ListVehicleChangesError()
