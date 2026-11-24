from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_file_summarize400_error1 import ApiV1FileSummarize400Error1
from ..models.api_v1_file_summarize413_error1 import ApiV1FileSummarize413Error1
from ..models.api_v1_file_summarize429_error1 import ApiV1FileSummarize429Error1
from ..models.error import Error
from ..models.payment_required1 import PaymentRequired1

SaplingSummarizeFileErrorBody: TypeAlias = (
    ApiV1FileSummarize400Error1
    | Error
    | PaymentRequired1
    | ApiV1FileSummarize413Error1
    | ApiV1FileSummarize429Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SaplingSummarizeFileError:
    def map(self, status_code: int, content: bytes) -> SaplingSummarizeFileErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1FileSummarize400Error1](content)
            case 401 | 403 | 500 | 502:
                return decode_json[Error](content)
            case 402:
                return decode_json[PaymentRequired1](content)
            case 413:
                return decode_json[ApiV1FileSummarize413Error1](content)
            case 429:
                return decode_json[ApiV1FileSummarize429Error1](content)
            case _:
                return RawError(status_code, content)


sapling_summarize_file_error_mapper: Final[ErrorMapper[SaplingSummarizeFileErrorBody]] = _SaplingSummarizeFileError()
