from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ExpandBitlinkErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ExpandBitlinkError:
    def map(self, status_code: int, content: bytes) -> ExpandBitlinkErrorBody:
        match status_code:
            case 400 | 404 | 410 | 422 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


expand_bitlink_error_mapper: Final[ErrorMapper[ExpandBitlinkErrorBody]] = _ExpandBitlinkError()
