from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateDeploymentVariableErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateDeploymentVariableError:
    def map(self, status_code: int, content: bytes) -> CreateDeploymentVariableErrorBody:
        match status_code:
            case 404 | 409:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_deployment_variable_error_mapper: Final[
    ErrorMapper[CreateDeploymentVariableErrorBody]
] = _CreateDeploymentVariableError()
