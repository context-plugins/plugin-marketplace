from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.not_found_error_response import NotFoundErrorResponse

AudiencesControllerFindUsagesErrorBody: TypeAlias = NotFoundErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _AudiencesControllerFindUsagesError:
    def map(self, status_code: int, content: bytes) -> AudiencesControllerFindUsagesErrorBody:
        match status_code:
            case 401 | 403:
                return RawError(status_code, content)
            case 404:
                return decode_json[NotFoundErrorResponse](content)
            case _:
                return RawError(status_code, content)


audiences_controller_find_usages_error_mapper: Final[
    ErrorMapper[AudiencesControllerFindUsagesErrorBody]
] = _AudiencesControllerFindUsagesError()
