from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.simplified_error import SimplifiedError

CreateStaticQrCodePublicErrorBody: TypeAlias = Error | SimplifiedError | RawError


@dataclass(frozen=True, slots=True)
class _CreateStaticQrCodePublicError:
    def map(self, status_code: int, content: bytes) -> CreateStaticQrCodePublicErrorBody:
        match status_code:
            case 400 | 403 | 406 | 422 | 500:
                return decode_json[Error](content)
            case 429:
                return decode_json[SimplifiedError](content)
            case _:
                return RawError(status_code, content)


create_static_qr_code_public_error_mapper: Final[
    ErrorMapper[CreateStaticQrCodePublicErrorBody]
] = _CreateStaticQrCodePublicError()
