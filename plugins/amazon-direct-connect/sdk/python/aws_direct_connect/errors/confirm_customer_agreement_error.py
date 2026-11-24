from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ConfirmCustomerAgreementErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ConfirmCustomerAgreementError:
    def map(self, status_code: int, content: bytes) -> ConfirmCustomerAgreementErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


confirm_customer_agreement_error_mapper: Final[
    ErrorMapper[ConfirmCustomerAgreementErrorBody]
] = _ConfirmCustomerAgreementError()
