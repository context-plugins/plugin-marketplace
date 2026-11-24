from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.simplified_error import SimplifiedError

UpdateBitlinkErrorBody: TypeAlias = Error | SimplifiedError | RawError


@dataclass(frozen=True, slots=True)
class _UpdateBitlinkError:
    def map(self, status_code: int, content: bytes) -> UpdateBitlinkErrorBody:
        match status_code:
            case 400 | 402 | 403 | 404 | 409 | 410 | 422 | 500 | 503:
                return decode_json[Error](content)
            case 429:
                return decode_json[SimplifiedError](content)
            case _:
                return RawError(status_code, content)


update_bitlink_error_mapper: Final[ErrorMapper[UpdateBitlinkErrorBody]] = _UpdateBitlinkError()
