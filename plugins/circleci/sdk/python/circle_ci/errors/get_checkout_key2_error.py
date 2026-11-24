from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetCheckoutKey2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetCheckoutKey2Error:
    def map(self, status_code: int, content: bytes) -> GetCheckoutKey2ErrorBody:
        match status_code:
            case 401 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_checkout_key2_error_mapper: Final[ErrorMapper[GetCheckoutKey2ErrorBody]] = _GetCheckoutKey2Error()
