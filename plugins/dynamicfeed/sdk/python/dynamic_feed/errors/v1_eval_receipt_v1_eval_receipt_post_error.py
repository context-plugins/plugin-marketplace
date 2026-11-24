from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1EvalReceiptV1EvalReceiptPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1EvalReceiptV1EvalReceiptPostError:
    def map(self, status_code: int, content: bytes) -> V1EvalReceiptV1EvalReceiptPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_eval_receipt_v1_eval_receipt_post_error_mapper: Final[
    ErrorMapper[V1EvalReceiptV1EvalReceiptPostErrorBody]
] = _V1EvalReceiptV1EvalReceiptPostError()
