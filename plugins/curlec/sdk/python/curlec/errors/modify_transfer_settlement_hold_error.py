from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ModifyTransferSettlementHoldErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ModifyTransferSettlementHoldError:
    def map(self, status_code: int, content: bytes) -> ModifyTransferSettlementHoldErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


modify_transfer_settlement_hold_error_mapper: Final[
    ErrorMapper[ModifyTransferSettlementHoldErrorBody]
] = _ModifyTransferSettlementHoldError()
