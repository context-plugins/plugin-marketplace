from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

CreateEnvVarV2EnvVarsPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _CreateEnvVarV2EnvVarsPostError:
    def map(self, status_code: int, content: bytes) -> CreateEnvVarV2EnvVarsPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


create_env_var_v2_env_vars_post_error_mapper: Final[
    ErrorMapper[CreateEnvVarV2EnvVarsPostErrorBody]
] = _CreateEnvVarV2EnvVarsPostError()
