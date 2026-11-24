from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.simplified_error import SimplifiedError

ListQrMinimalErrorBody: TypeAlias = Error | SimplifiedError | RawError


@dataclass(frozen=True, slots=True)
class _ListQrMinimalError:
    def map(self, status_code: int, content: bytes) -> ListQrMinimalErrorBody:
        match status_code:
            case 403 | 500:
                return decode_json[Error](content)
            case 429:
                return decode_json[SimplifiedError](content)
            case _:
                return RawError(status_code, content)


list_qr_minimal_error_mapper: Final[ErrorMapper[ListQrMinimalErrorBody]] = _ListQrMinimalError()
