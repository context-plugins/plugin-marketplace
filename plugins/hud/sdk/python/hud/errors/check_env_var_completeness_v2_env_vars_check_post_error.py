from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

CheckEnvVarCompletenessV2EnvVarsCheckPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _CheckEnvVarCompletenessV2EnvVarsCheckPostError:
    def map(self, status_code: int, content: bytes) -> CheckEnvVarCompletenessV2EnvVarsCheckPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


check_env_var_completeness_v2_env_vars_check_post_error_mapper: Final[
    ErrorMapper[CheckEnvVarCompletenessV2EnvVarsCheckPostErrorBody]
] = _CheckEnvVarCompletenessV2EnvVarsCheckPostError()
