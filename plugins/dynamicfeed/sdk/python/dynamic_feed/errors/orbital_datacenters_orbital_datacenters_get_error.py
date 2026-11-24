from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

OrbitalDatacentersOrbitalDatacentersGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _OrbitalDatacentersOrbitalDatacentersGetError:
    def map(self, status_code: int, content: bytes) -> OrbitalDatacentersOrbitalDatacentersGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


orbital_datacenters_orbital_datacenters_get_error_mapper: Final[
    ErrorMapper[OrbitalDatacentersOrbitalDatacentersGetErrorBody]
] = _OrbitalDatacentersOrbitalDatacentersGetError()
