from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetQrCodeImagePublicErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetQrCodeImagePublicError:
    def map(self, status_code: int, content: bytes) -> GetQrCodeImagePublicErrorBody:
        match status_code:
            case 400 | 403 | 404 | 410 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_qr_code_image_public_error_mapper: Final[ErrorMapper[GetQrCodeImagePublicErrorBody]] = _GetQrCodeImagePublicError()
