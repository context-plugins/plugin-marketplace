from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateDeploymentVariableErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateDeploymentVariableError:
    def map(self, status_code: int, content: bytes) -> UpdateDeploymentVariableErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_deployment_variable_error_mapper: Final[
    ErrorMapper[UpdateDeploymentVariableErrorBody]
] = _UpdateDeploymentVariableError()
