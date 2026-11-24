from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

SendEmailErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _SendEmailError:
    def map(self, status_code: int, content: bytes) -> SendEmailErrorBody:
        match status_code:
            case 400 | 401 | 402 | 403 | 429 | 502 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


send_email_error_mapper: Final[ErrorMapper[SendEmailErrorBody]] = _SendEmailError()
