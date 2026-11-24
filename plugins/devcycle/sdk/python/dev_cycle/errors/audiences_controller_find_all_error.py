from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AudiencesControllerFindAllErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AudiencesControllerFindAllError:
    def map(self, status_code: int, content: bytes) -> AudiencesControllerFindAllErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


audiences_controller_find_all_error_mapper: Final[
    ErrorMapper[AudiencesControllerFindAllErrorBody]
] = _AudiencesControllerFindAllError()
