from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

CreateSoftwareConfigurationErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _CreateSoftwareConfigurationError:
    def map(self, status_code: int, content: bytes) -> CreateSoftwareConfigurationErrorBody:
        match status_code:
            case 400 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


create_software_configuration_error_mapper: Final[
    ErrorMapper[CreateSoftwareConfigurationErrorBody]
] = _CreateSoftwareConfigurationError()
