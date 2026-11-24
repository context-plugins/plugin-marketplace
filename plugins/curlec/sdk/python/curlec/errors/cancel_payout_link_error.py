from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CancelPayoutLinkErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CancelPayoutLinkError:
    def map(self, status_code: int, content: bytes) -> CancelPayoutLinkErrorBody:
        match status_code:
            case 400 | 401 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


cancel_payout_link_error_mapper: Final[ErrorMapper[CancelPayoutLinkErrorBody]] = _CancelPayoutLinkError()
