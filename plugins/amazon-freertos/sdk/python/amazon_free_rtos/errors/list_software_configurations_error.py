from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListSoftwareConfigurationsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListSoftwareConfigurationsError:
    def map(self, status_code: int, content: bytes) -> ListSoftwareConfigurationsErrorBody:
        match status_code:
            case 400 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_software_configurations_error_mapper: Final[
    ErrorMapper[ListSoftwareConfigurationsErrorBody]
] = _ListSoftwareConfigurationsError()
