from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error400_checkout_post import Error400CheckoutPost
from ..models.error401_merchant_null import Error401MerchantNull
from ..models.error403 import Error403

PostCheckoutSessionErrorBody: TypeAlias = Error400CheckoutPost | Error401MerchantNull | Error403 | str | RawError


@dataclass(frozen=True, slots=True)
class _PostCheckoutSessionError:
    def map(self, status_code: int, content: bytes) -> PostCheckoutSessionErrorBody:
        match status_code:
            case 400:
                return decode_json[Error400CheckoutPost](content)
            case 401:
                return decode_json[Error401MerchantNull](content)
            case 403:
                return decode_json[Error403](content)
            case 404 | 500:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


post_checkout_session_error_mapper: Final[ErrorMapper[PostCheckoutSessionErrorBody]] = _PostCheckoutSessionError()
