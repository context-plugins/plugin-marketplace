from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_sms403_error1 import ApiV1Sms403Error1

SmsIndexErrorBody: TypeAlias = ApiV1Sms403Error1 | RawError


@dataclass(frozen=True, slots=True)
class _SmsIndexError:
    def map(self, status_code: int, content: bytes) -> SmsIndexErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV1Sms403Error1](content)
            case _:
                return RawError(status_code, content)


sms_index_error_mapper: Final[ErrorMapper[SmsIndexErrorBody]] = _SmsIndexError()
