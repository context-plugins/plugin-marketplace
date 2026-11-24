from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_sms403_error1 import ApiV1Sms403Error1
from ..models.error import Error
from ..models.unions.api_v1_sms_response21 import ApiV1SmsResponse21

SmsCreateErrorBody: TypeAlias = Error | ApiV1Sms403Error1 | ApiV1SmsResponse21 | RawError


@dataclass(frozen=True, slots=True)
class _SmsCreateError:
    def map(self, status_code: int, content: bytes) -> SmsCreateErrorBody:
        match status_code:
            case 400:
                return decode_json[Error](content)
            case 403:
                return decode_json[ApiV1Sms403Error1](content)
            case 422:
                return decode_json[ApiV1SmsResponse21](content)
            case _:
                return RawError(status_code, content)


sms_create_error_mapper: Final[ErrorMapper[SmsCreateErrorBody]] = _SmsCreateError()
