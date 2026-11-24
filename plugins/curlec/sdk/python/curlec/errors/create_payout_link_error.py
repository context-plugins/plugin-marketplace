from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreatePayoutLinkErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreatePayoutLinkError:
    def map(self, status_code: int, content: bytes) -> CreatePayoutLinkErrorBody:
        match status_code:
            case 400 | 401 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_payout_link_error_mapper: Final[ErrorMapper[CreatePayoutLinkErrorBody]] = _CreatePayoutLinkError()
