from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_docx_aidetect400_error1 import ApiV1DocxAidetect400Error1
from ..models.api_v1_docx_aidetect413_error1 import ApiV1DocxAidetect413Error1
from ..models.error import Error
from ..models.payment_required1 import PaymentRequired1

SaplingAidetectDocxErrorBody: TypeAlias = (
    ApiV1DocxAidetect400Error1 | Error | PaymentRequired1 | ApiV1DocxAidetect413Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _SaplingAidetectDocxError:
    def map(self, status_code: int, content: bytes) -> SaplingAidetectDocxErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1DocxAidetect400Error1](content)
            case 401 | 403 | 429 | 500:
                return decode_json[Error](content)
            case 402:
                return decode_json[PaymentRequired1](content)
            case 413:
                return decode_json[ApiV1DocxAidetect413Error1](content)
            case _:
                return RawError(status_code, content)


sapling_aidetect_docx_error_mapper: Final[ErrorMapper[SaplingAidetectDocxErrorBody]] = _SaplingAidetectDocxError()
