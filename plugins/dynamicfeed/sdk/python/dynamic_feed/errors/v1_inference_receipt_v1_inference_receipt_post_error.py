from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1InferenceReceiptV1InferenceReceiptPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1InferenceReceiptV1InferenceReceiptPostError:
    def map(self, status_code: int, content: bytes) -> V1InferenceReceiptV1InferenceReceiptPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_inference_receipt_v1_inference_receipt_post_error_mapper: Final[
    ErrorMapper[V1InferenceReceiptV1InferenceReceiptPostErrorBody]
] = _V1InferenceReceiptV1InferenceReceiptPostError()
