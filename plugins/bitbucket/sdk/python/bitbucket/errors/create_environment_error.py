from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateEnvironmentErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateEnvironmentError:
    def map(self, status_code: int, content: bytes) -> CreateEnvironmentErrorBody:
        match status_code:
            case 404 | 409:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_environment_error_mapper: Final[ErrorMapper[CreateEnvironmentErrorBody]] = _CreateEnvironmentError()
