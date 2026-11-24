from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetQrCodeByIdPublicErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetQrCodeByIdPublicError:
    def map(self, status_code: int, content: bytes) -> GetQrCodeByIdPublicErrorBody:
        match status_code:
            case 400 | 403 | 404 | 410 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_qr_code_by_id_public_error_mapper: Final[ErrorMapper[GetQrCodeByIdPublicErrorBody]] = _GetQrCodeByIdPublicError()
