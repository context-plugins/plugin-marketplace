from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ConfirmCustomerAgreement2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ConfirmCustomerAgreement2Error:
    def map(self, status_code: int, content: bytes) -> ConfirmCustomerAgreement2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


confirm_customer_agreement2_error_mapper: Final[
    ErrorMapper[ConfirmCustomerAgreement2ErrorBody]
] = _ConfirmCustomerAgreement2Error()
