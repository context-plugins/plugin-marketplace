from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

AddOrUpdateContextEnvironmentVariableErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _AddOrUpdateContextEnvironmentVariableError:
    def map(self, status_code: int, content: bytes) -> AddOrUpdateContextEnvironmentVariableErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


add_or_update_context_environment_variable_error_mapper: Final[
    ErrorMapper[AddOrUpdateContextEnvironmentVariableErrorBody]
] = _AddOrUpdateContextEnvironmentVariableError()
