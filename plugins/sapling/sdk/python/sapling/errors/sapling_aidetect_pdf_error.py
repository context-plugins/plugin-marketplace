from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_pdf_aidetect400_error1 import ApiV1PdfAidetect400Error1
from ..models.api_v1_pdf_aidetect413_error1 import ApiV1PdfAidetect413Error1
from ..models.error import Error
from ..models.payment_required1 import PaymentRequired1

SaplingAidetectPdfErrorBody: TypeAlias = (
    ApiV1PdfAidetect400Error1 | Error | PaymentRequired1 | ApiV1PdfAidetect413Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _SaplingAidetectPdfError:
    def map(self, status_code: int, content: bytes) -> SaplingAidetectPdfErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1PdfAidetect400Error1](content)
            case 401 | 403 | 429 | 500:
                return decode_json[Error](content)
            case 402:
                return decode_json[PaymentRequired1](content)
            case 413:
                return decode_json[ApiV1PdfAidetect413Error1](content)
            case _:
                return RawError(status_code, content)


sapling_aidetect_pdf_error_mapper: Final[ErrorMapper[SaplingAidetectPdfErrorBody]] = _SaplingAidetectPdfError()
