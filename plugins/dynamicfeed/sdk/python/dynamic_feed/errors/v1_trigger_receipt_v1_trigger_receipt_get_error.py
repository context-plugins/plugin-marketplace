from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1TriggerReceiptV1TriggerReceiptGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1TriggerReceiptV1TriggerReceiptGetError:
    def map(self, status_code: int, content: bytes) -> V1TriggerReceiptV1TriggerReceiptGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_trigger_receipt_v1_trigger_receipt_get_error_mapper: Final[
    ErrorMapper[V1TriggerReceiptV1TriggerReceiptGetErrorBody]
] = _V1TriggerReceiptV1TriggerReceiptGetError()
