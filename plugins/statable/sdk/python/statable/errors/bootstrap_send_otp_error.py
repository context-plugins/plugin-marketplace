from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

BootstrapSendOtpErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _BootstrapSendOtpError:
    def map(self, status_code: int, content: bytes) -> BootstrapSendOtpErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


bootstrap_send_otp_error_mapper: Final[ErrorMapper[BootstrapSendOtpErrorBody]] = _BootstrapSendOtpError()
