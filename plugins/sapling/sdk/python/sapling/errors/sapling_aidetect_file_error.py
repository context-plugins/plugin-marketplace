from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_file_aidetect400_error1 import ApiV1FileAidetect400Error1
from ..models.api_v1_file_aidetect413_error1 import ApiV1FileAidetect413Error1
from ..models.error import Error
from ..models.payment_required1 import PaymentRequired1

SaplingAidetectFileErrorBody: TypeAlias = (
    ApiV1FileAidetect400Error1 | Error | PaymentRequired1 | ApiV1FileAidetect413Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _SaplingAidetectFileError:
    def map(self, status_code: int, content: bytes) -> SaplingAidetectFileErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1FileAidetect400Error1](content)
            case 401 | 403 | 429 | 500:
                return decode_json[Error](content)
            case 402:
                return decode_json[PaymentRequired1](content)
            case 413:
                return decode_json[ApiV1FileAidetect413Error1](content)
            case _:
                return RawError(status_code, content)


sapling_aidetect_file_error_mapper: Final[ErrorMapper[SaplingAidetectFileErrorBody]] = _SaplingAidetectFileError()
