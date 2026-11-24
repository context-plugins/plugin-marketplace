from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

SubscribePageAppErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _SubscribePageAppError:
    def map(self, status_code: int, content: bytes) -> SubscribePageAppErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


subscribe_page_app_error_mapper: Final[ErrorMapper[SubscribePageAppErrorBody]] = _SubscribePageAppError()
