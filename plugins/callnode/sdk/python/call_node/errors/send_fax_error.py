from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

SendFaxErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _SendFaxError:
    def map(self, status_code: int, content: bytes) -> SendFaxErrorBody:
        match status_code:
            case 400 | 401 | 402 | 403 | 413 | 415 | 422 | 429 | 502:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


send_fax_error_mapper: Final[ErrorMapper[SendFaxErrorBody]] = _SendFaxError()
