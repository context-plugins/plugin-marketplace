from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

CreateProjectEnvironmentVariableErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _CreateProjectEnvironmentVariableError:
    def map(self, status_code: int, content: bytes) -> CreateProjectEnvironmentVariableErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


create_project_environment_variable_error_mapper: Final[
    ErrorMapper[CreateProjectEnvironmentVariableErrorBody]
] = _CreateProjectEnvironmentVariableError()
