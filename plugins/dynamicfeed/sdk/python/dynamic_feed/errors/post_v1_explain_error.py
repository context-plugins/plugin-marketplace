from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

PostV1ExplainErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _PostV1ExplainError:
    def map(self, status_code: int, content: bytes) -> PostV1ExplainErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


post_v1_explain_error_mapper: Final[ErrorMapper[PostV1ExplainErrorBody]] = _PostV1ExplainError()
