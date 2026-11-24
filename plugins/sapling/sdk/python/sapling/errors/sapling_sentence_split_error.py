from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_sentence_split429_error1 import ApiV1SentenceSplit429Error1
from ..models.error import Error
from ..models.payload_too_large1 import PayloadTooLarge1
from ..models.payment_required1 import PaymentRequired1

SaplingSentenceSplitErrorBody: TypeAlias = (
    Error | PaymentRequired1 | PayloadTooLarge1 | ApiV1SentenceSplit429Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _SaplingSentenceSplitError:
    def map(self, status_code: int, content: bytes) -> SaplingSentenceSplitErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500:
                return decode_json[Error](content)
            case 402:
                return decode_json[PaymentRequired1](content)
            case 413:
                return decode_json[PayloadTooLarge1](content)
            case 429:
                return decode_json[ApiV1SentenceSplit429Error1](content)
            case _:
                return RawError(status_code, content)


sapling_sentence_split_error_mapper: Final[ErrorMapper[SaplingSentenceSplitErrorBody]] = _SaplingSentenceSplitError()
