from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.payment_required1 import PaymentRequired1

SaplingDeleteCustomFilterErrorBody: TypeAlias = Error | PaymentRequired1 | RawError


@dataclass(frozen=True, slots=True)
class _SaplingDeleteCustomFilterError:
    def map(self, status_code: int, content: bytes) -> SaplingDeleteCustomFilterErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500:
                return decode_json[Error](content)
            case 402:
                return decode_json[PaymentRequired1](content)
            case _:
                return RawError(status_code, content)


sapling_delete_custom_filter_error_mapper: Final[
    ErrorMapper[SaplingDeleteCustomFilterErrorBody]
] = _SaplingDeleteCustomFilterError()
