from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_summarize429_error1 import ApiV1Summarize429Error1
from ..models.error import Error
from ..models.payload_too_large1 import PayloadTooLarge1
from ..models.payment_required1 import PaymentRequired1

SaplingSummarizeErrorBody: TypeAlias = Error | PaymentRequired1 | PayloadTooLarge1 | ApiV1Summarize429Error1 | RawError


@dataclass(frozen=True, slots=True)
class _SaplingSummarizeError:
    def map(self, status_code: int, content: bytes) -> SaplingSummarizeErrorBody:
        match status_code:
            case 400 | 401 | 500 | 502 | 503:
                return decode_json[Error](content)
            case 402:
                return decode_json[PaymentRequired1](content)
            case 413:
                return decode_json[PayloadTooLarge1](content)
            case 429:
                return decode_json[ApiV1Summarize429Error1](content)
            case _:
                return RawError(status_code, content)


sapling_summarize_error_mapper: Final[ErrorMapper[SaplingSummarizeErrorBody]] = _SaplingSummarizeError()
