from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ActivateDeactivateFundAccountErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ActivateDeactivateFundAccountError:
    def map(self, status_code: int, content: bytes) -> ActivateDeactivateFundAccountErrorBody:
        match status_code:
            case 400 | 401 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


activate_deactivate_fund_account_error_mapper: Final[
    ErrorMapper[ActivateDeactivateFundAccountErrorBody]
] = _ActivateDeactivateFundAccountError()
