from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

CheckoutBillingCheckoutPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _CheckoutBillingCheckoutPostError:
    def map(self, status_code: int, content: bytes) -> CheckoutBillingCheckoutPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


checkout_billing_checkout_post_error_mapper: Final[
    ErrorMapper[CheckoutBillingCheckoutPostErrorBody]
] = _CheckoutBillingCheckoutPostError()
