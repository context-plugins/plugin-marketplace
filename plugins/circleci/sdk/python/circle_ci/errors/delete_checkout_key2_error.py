from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteCheckoutKey2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteCheckoutKey2Error:
    def map(self, status_code: int, content: bytes) -> DeleteCheckoutKey2ErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_checkout_key2_error_mapper: Final[ErrorMapper[DeleteCheckoutKey2ErrorBody]] = _DeleteCheckoutKey2Error()
