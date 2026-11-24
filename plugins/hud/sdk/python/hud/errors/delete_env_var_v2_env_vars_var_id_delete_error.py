from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

DeleteEnvVarV2EnvVarsVarIdDeleteErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _DeleteEnvVarV2EnvVarsVarIdDeleteError:
    def map(self, status_code: int, content: bytes) -> DeleteEnvVarV2EnvVarsVarIdDeleteErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


delete_env_var_v2_env_vars_var_id_delete_error_mapper: Final[
    ErrorMapper[DeleteEnvVarV2EnvVarsVarIdDeleteErrorBody]
] = _DeleteEnvVarV2EnvVarsVarIdDeleteError()
