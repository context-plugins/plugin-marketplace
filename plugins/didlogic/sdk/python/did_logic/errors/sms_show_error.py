from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_sms403_error1 import ApiV1Sms403Error1
from ..models.error import Error

SmsShowErrorBody: TypeAlias = ApiV1Sms403Error1 | Error | RawError


@dataclass(frozen=True, slots=True)
class _SmsShowError:
    def map(self, status_code: int, content: bytes) -> SmsShowErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV1Sms403Error1](content)
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


sms_show_error_mapper: Final[ErrorMapper[SmsShowErrorBody]] = _SmsShowError()
