from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.payload_too_large1 import PayloadTooLarge1
from ..models.payment_required1 import PaymentRequired1
from ..models.unions.api_v1_complete_accept_response11 import ApiV1CompleteAcceptResponse11

SaplingAcceptCompletionErrorBody: TypeAlias = (
    ApiV1CompleteAcceptResponse11 | Error | PaymentRequired1 | PayloadTooLarge1 | RawError
)


@dataclass(frozen=True, slots=True)
class _SaplingAcceptCompletionError:
    def map(self, status_code: int, content: bytes) -> SaplingAcceptCompletionErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1CompleteAcceptResponse11](content)
            case 401 | 403 | 500:
                return decode_json[Error](content)
            case 402:
                return decode_json[PaymentRequired1](content)
            case 413:
                return decode_json[PayloadTooLarge1](content)
            case _:
                return RawError(status_code, content)


sapling_accept_completion_error_mapper: Final[
    ErrorMapper[SaplingAcceptCompletionErrorBody]
] = _SaplingAcceptCompletionError()
