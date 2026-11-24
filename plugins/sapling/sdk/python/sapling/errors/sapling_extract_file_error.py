from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_file_extract400_error1 import ApiV1FileExtract400Error1
from ..models.api_v1_file_extract413_error1 import ApiV1FileExtract413Error1
from ..models.api_v1_file_extract429_error1 import ApiV1FileExtract429Error1
from ..models.error import Error
from ..models.payment_required1 import PaymentRequired1

SaplingExtractFileErrorBody: TypeAlias = (
    ApiV1FileExtract400Error1
    | Error
    | PaymentRequired1
    | ApiV1FileExtract413Error1
    | ApiV1FileExtract429Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SaplingExtractFileError:
    def map(self, status_code: int, content: bytes) -> SaplingExtractFileErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1FileExtract400Error1](content)
            case 401 | 403 | 500 | 502:
                return decode_json[Error](content)
            case 402:
                return decode_json[PaymentRequired1](content)
            case 413:
                return decode_json[ApiV1FileExtract413Error1](content)
            case 429:
                return decode_json[ApiV1FileExtract429Error1](content)
            case _:
                return RawError(status_code, content)


sapling_extract_file_error_mapper: Final[ErrorMapper[SaplingExtractFileErrorBody]] = _SaplingExtractFileError()
