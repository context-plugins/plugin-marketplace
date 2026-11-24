from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_balance403_error1 import ApiV1Balance403Error1

BalanceShowErrorBody: TypeAlias = ApiV1Balance403Error1 | RawError


@dataclass(frozen=True, slots=True)
class _BalanceShowError:
    def map(self, status_code: int, content: bytes) -> BalanceShowErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV1Balance403Error1](content)
            case _:
                return RawError(status_code, content)


balance_show_error_mapper: Final[ErrorMapper[BalanceShowErrorBody]] = _BalanceShowError()
