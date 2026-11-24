from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

SubscribeErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _SubscribeError:
    def map(self, status_code: int, content: bytes) -> SubscribeErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


subscribe_error_mapper: Final[ErrorMapper[SubscribeErrorBody]] = _SubscribeError()
