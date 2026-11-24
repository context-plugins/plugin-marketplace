from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

PostCompletionV2CompletionsPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _PostCompletionV2CompletionsPostError:
    def map(self, status_code: int, content: bytes) -> PostCompletionV2CompletionsPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


post_completion_v2_completions_post_error_mapper: Final[
    ErrorMapper[PostCompletionV2CompletionsPostErrorBody]
] = _PostCompletionV2CompletionsPostError()
