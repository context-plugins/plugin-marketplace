from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_error_response import BadRequestErrorResponse
from ..models.conflict_error_response import ConflictErrorResponse
from ..models.not_found_error_response import NotFoundErrorResponse

ProjectsControllerUpdateSettingsErrorBody: TypeAlias = (
    BadRequestErrorResponse | NotFoundErrorResponse | ConflictErrorResponse | RawError
)


@dataclass(frozen=True, slots=True)
class _ProjectsControllerUpdateSettingsError:
    def map(self, status_code: int, content: bytes) -> ProjectsControllerUpdateSettingsErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestErrorResponse](content)
            case 403:
                return RawError(status_code, content)
            case 404:
                return decode_json[NotFoundErrorResponse](content)
            case 409:
                return decode_json[ConflictErrorResponse](content)
            case _:
                return RawError(status_code, content)


projects_controller_update_settings_error_mapper: Final[
    ErrorMapper[ProjectsControllerUpdateSettingsErrorBody]
] = _ProjectsControllerUpdateSettingsError()
