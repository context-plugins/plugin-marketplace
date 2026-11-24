from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_error_response import BadRequestErrorResponse
from ..models.conflict_error_response import ConflictErrorResponse
from ..models.not_found_error_response import NotFoundErrorResponse

VariablesControllerUpdateErrorBody: TypeAlias = (
    BadRequestErrorResponse | NotFoundErrorResponse | ConflictErrorResponse | RawError
)


@dataclass(frozen=True, slots=True)
class _VariablesControllerUpdateError:
    def map(self, status_code: int, content: bytes) -> VariablesControllerUpdateErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestErrorResponse](content)
            case 401:
                return RawError(status_code, content)
            case 404:
                return decode_json[NotFoundErrorResponse](content)
            case 409:
                return decode_json[ConflictErrorResponse](content)
            case _:
                return RawError(status_code, content)


variables_controller_update_error_mapper: Final[
    ErrorMapper[VariablesControllerUpdateErrorBody]
] = _VariablesControllerUpdateError()
