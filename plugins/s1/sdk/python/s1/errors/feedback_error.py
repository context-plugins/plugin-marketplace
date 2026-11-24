from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

FeedbackErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _FeedbackError:
    def map(self, status_code: int, content: bytes) -> FeedbackErrorBody:
        match status_code:
            case 400 | 401 | 403 | 413 | 415 | 429 | 500 | 503:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


feedback_error_mapper: Final[ErrorMapper[FeedbackErrorBody]] = _FeedbackError()
