from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CheckEntitlementErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CheckEntitlementError:
    def map(self, status_code: int, content: bytes) -> CheckEntitlementErrorBody:
        match status_code:
            case 400 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


check_entitlement_error_mapper: Final[ErrorMapper[CheckEntitlementErrorBody]] = _CheckEntitlementError()
