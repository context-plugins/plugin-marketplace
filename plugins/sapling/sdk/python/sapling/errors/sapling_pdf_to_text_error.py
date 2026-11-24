from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_ingest_pdf_to_text400_error1 import ApiV1IngestPdfToText400Error1
from ..models.api_v1_ingest_pdf_to_text413_error1 import ApiV1IngestPdfToText413Error1
from ..models.error import Error
from ..models.payment_required1 import PaymentRequired1

SaplingPdfToTextErrorBody: TypeAlias = (
    ApiV1IngestPdfToText400Error1 | Error | PaymentRequired1 | ApiV1IngestPdfToText413Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _SaplingPdfToTextError:
    def map(self, status_code: int, content: bytes) -> SaplingPdfToTextErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1IngestPdfToText400Error1](content)
            case 401 | 403 | 429 | 500:
                return decode_json[Error](content)
            case 402:
                return decode_json[PaymentRequired1](content)
            case 413:
                return decode_json[ApiV1IngestPdfToText413Error1](content)
            case _:
                return RawError(status_code, content)


sapling_pdf_to_text_error_mapper: Final[ErrorMapper[SaplingPdfToTextErrorBody]] = _SaplingPdfToTextError()
