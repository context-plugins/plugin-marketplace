from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

SanctionsScreenSanctionsGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _SanctionsScreenSanctionsGetError:
    def map(self, status_code: int, content: bytes) -> SanctionsScreenSanctionsGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


sanctions_screen_sanctions_get_error_mapper: Final[
    ErrorMapper[SanctionsScreenSanctionsGetErrorBody]
] = _SanctionsScreenSanctionsGetError()
