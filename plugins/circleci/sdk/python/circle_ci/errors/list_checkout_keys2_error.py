from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListCheckoutKeys2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListCheckoutKeys2Error:
    def map(self, status_code: int, content: bytes) -> ListCheckoutKeys2ErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_checkout_keys2_error_mapper: Final[ErrorMapper[ListCheckoutKeys2ErrorBody]] = _ListCheckoutKeys2Error()
