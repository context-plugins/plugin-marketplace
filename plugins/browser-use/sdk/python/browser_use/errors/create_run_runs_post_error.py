from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_key_spend_limit_error import ApiKeySpendLimitError
from ..models.http_validation_error import HttpValidationError

CreateRunRunsPostErrorBody: TypeAlias = ApiKeySpendLimitError | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _CreateRunRunsPostError:
    def map(self, status_code: int, content: bytes) -> CreateRunRunsPostErrorBody:
        match status_code:
            case 400 | 403 | 404 | 409 | 429:
                return RawError(status_code, content)
            case 402:
                return decode_json[ApiKeySpendLimitError](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


create_run_runs_post_error_mapper: Final[ErrorMapper[CreateRunRunsPostErrorBody]] = _CreateRunRunsPostError()
