from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetApiV1RunnersRunnerIdErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1RunnersRunnerIdError:
    def map(self, status_code: int, content: bytes) -> GetApiV1RunnersRunnerIdErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_api_v1_runners_runner_id_error_mapper: Final[
    ErrorMapper[GetApiV1RunnersRunnerIdErrorBody]
] = _GetApiV1RunnersRunnerIdError()
