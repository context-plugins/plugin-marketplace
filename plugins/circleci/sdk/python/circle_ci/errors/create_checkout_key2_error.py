from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateCheckoutKey2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateCheckoutKey2Error:
    def map(self, status_code: int, content: bytes) -> CreateCheckoutKey2ErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_checkout_key2_error_mapper: Final[ErrorMapper[CreateCheckoutKey2ErrorBody]] = _CreateCheckoutKey2Error()
