from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

ChatCompletionsV1BetaChatCompletionsPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _ChatCompletionsV1BetaChatCompletionsPostError:
    def map(self, status_code: int, content: bytes) -> ChatCompletionsV1BetaChatCompletionsPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


chat_completions_v1_beta_chat_completions_post_error_mapper: Final[
    ErrorMapper[ChatCompletionsV1BetaChatCompletionsPostErrorBody]
] = _ChatCompletionsV1BetaChatCompletionsPostError()
