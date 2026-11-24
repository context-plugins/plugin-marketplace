from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.not_found_error_response import NotFoundErrorResponse

ProjectsControllerGetStalenessErrorBody: TypeAlias = NotFoundErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ProjectsControllerGetStalenessError:
    def map(self, status_code: int, content: bytes) -> ProjectsControllerGetStalenessErrorBody:
        match status_code:
            case 403:
                return RawError(status_code, content)
            case 404:
                return decode_json[NotFoundErrorResponse](content)
            case _:
                return RawError(status_code, content)


projects_controller_get_staleness_error_mapper: Final[
    ErrorMapper[ProjectsControllerGetStalenessErrorBody]
] = _ProjectsControllerGetStalenessError()
