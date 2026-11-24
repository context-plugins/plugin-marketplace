from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.not_found_error_response import NotFoundErrorResponse

AudiencesControllerRemoveErrorBody: TypeAlias = NotFoundErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _AudiencesControllerRemoveError:
    def map(self, status_code: int, content: bytes) -> AudiencesControllerRemoveErrorBody:
        match status_code:
            case 401 | 412:
                return RawError(status_code, content)
            case 404:
                return decode_json[NotFoundErrorResponse](content)
            case _:
                return RawError(status_code, content)


audiences_controller_remove_error_mapper: Final[
    ErrorMapper[AudiencesControllerRemoveErrorBody]
] = _AudiencesControllerRemoveError()
