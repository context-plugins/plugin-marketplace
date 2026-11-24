from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.simplified_error import SimplifiedError

CreateQrCodePublicErrorBody: TypeAlias = Error | SimplifiedError | RawError


@dataclass(frozen=True, slots=True)
class _CreateQrCodePublicError:
    def map(self, status_code: int, content: bytes) -> CreateQrCodePublicErrorBody:
        match status_code:
            case 400 | 402 | 403 | 404 | 410 | 500:
                return decode_json[Error](content)
            case 429:
                return decode_json[SimplifiedError](content)
            case _:
                return RawError(status_code, content)


create_qr_code_public_error_mapper: Final[ErrorMapper[CreateQrCodePublicErrorBody]] = _CreateQrCodePublicError()
