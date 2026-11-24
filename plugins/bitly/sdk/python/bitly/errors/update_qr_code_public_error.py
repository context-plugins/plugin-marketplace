from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateQrCodePublicErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateQrCodePublicError:
    def map(self, status_code: int, content: bytes) -> UpdateQrCodePublicErrorBody:
        match status_code:
            case 400 | 403 | 404 | 410 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_qr_code_public_error_mapper: Final[ErrorMapper[UpdateQrCodePublicErrorBody]] = _UpdateQrCodePublicError()
