from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_error_response import BadRequestErrorResponse

CustomPropertiesControllerFindAllErrorBody: TypeAlias = BadRequestErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _CustomPropertiesControllerFindAllError:
    def map(self, status_code: int, content: bytes) -> CustomPropertiesControllerFindAllErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestErrorResponse](content)
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


custom_properties_controller_find_all_error_mapper: Final[
    ErrorMapper[CustomPropertiesControllerFindAllErrorBody]
] = _CustomPropertiesControllerFindAllError()
