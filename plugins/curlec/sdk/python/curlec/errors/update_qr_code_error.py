from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateQrCodeErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateQrCodeError:
    def map(self, status_code: int, content: bytes) -> UpdateQrCodeErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_qr_code_error_mapper: Final[ErrorMapper[UpdateQrCodeErrorBody]] = _UpdateQrCodeError()
