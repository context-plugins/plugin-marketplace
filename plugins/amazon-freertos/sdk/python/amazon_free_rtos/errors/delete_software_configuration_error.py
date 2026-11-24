from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

DeleteSoftwareConfigurationErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _DeleteSoftwareConfigurationError:
    def map(self, status_code: int, content: bytes) -> DeleteSoftwareConfigurationErrorBody:
        match status_code:
            case 400 | 404 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


delete_software_configuration_error_mapper: Final[
    ErrorMapper[DeleteSoftwareConfigurationErrorBody]
] = _DeleteSoftwareConfigurationError()
