from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.simplified_error import SimplifiedError

CreateFullBitlinkErrorBody: TypeAlias = Error | SimplifiedError | RawError


@dataclass(frozen=True, slots=True)
class _CreateFullBitlinkError:
    def map(self, status_code: int, content: bytes) -> CreateFullBitlinkErrorBody:
        match status_code:
            case 400 | 402 | 403 | 404 | 417 | 422 | 500 | 503:
                return decode_json[Error](content)
            case 429:
                return decode_json[SimplifiedError](content)
            case _:
                return RawError(status_code, content)


create_full_bitlink_error_mapper: Final[ErrorMapper[CreateFullBitlinkErrorBody]] = _CreateFullBitlinkError()
