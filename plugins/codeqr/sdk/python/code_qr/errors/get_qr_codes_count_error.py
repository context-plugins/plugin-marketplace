from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.m4001 import M4001

GetQrCodesCountErrorBody: TypeAlias = M4001 | RawError


@dataclass(frozen=True, slots=True)
class _GetQrCodesCountError:
    def map(self, status_code: int, content: bytes) -> GetQrCodesCountErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 410 | 422 | 429 | 500:
                return decode_json[M4001](content)
            case _:
                return RawError(status_code, content)


get_qr_codes_count_error_mapper: Final[ErrorMapper[GetQrCodesCountErrorBody]] = _GetQrCodesCountError()
