from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

ListQaAgentsV2QaAgentsGetErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _ListQaAgentsV2QaAgentsGetError:
    def map(self, status_code: int, content: bytes) -> ListQaAgentsV2QaAgentsGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


list_qa_agents_v2_qa_agents_get_error_mapper: Final[
    ErrorMapper[ListQaAgentsV2QaAgentsGetErrorBody]
] = _ListQaAgentsV2QaAgentsGetError()
