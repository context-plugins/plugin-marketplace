from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_error_response import BadRequestErrorResponse

ProjectsControllerFindAllErrorBody: TypeAlias = BadRequestErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ProjectsControllerFindAllError:
    def map(self, status_code: int, content: bytes) -> ProjectsControllerFindAllErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestErrorResponse](content)
            case 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


projects_controller_find_all_error_mapper: Final[
    ErrorMapper[ProjectsControllerFindAllErrorBody]
] = _ProjectsControllerFindAllError()
