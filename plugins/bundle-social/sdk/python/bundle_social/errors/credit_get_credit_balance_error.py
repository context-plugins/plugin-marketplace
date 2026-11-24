from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_billing_credits_balance400_error1 import ApiV1BillingCreditsBalance400Error1
from ..models.api_v1_billing_credits_balance401_error1 import ApiV1BillingCreditsBalance401Error1
from ..models.api_v1_billing_credits_balance403_error1 import ApiV1BillingCreditsBalance403Error1
from ..models.api_v1_billing_credits_balance404_error1 import ApiV1BillingCreditsBalance404Error1
from ..models.api_v1_billing_credits_balance429_error1 import ApiV1BillingCreditsBalance429Error1
from ..models.api_v1_billing_credits_balance500_error1 import ApiV1BillingCreditsBalance500Error1
from ..models.api_v1_billing_credits_balance502_error1 import ApiV1BillingCreditsBalance502Error1
from ..models.api_v1_billing_credits_balance503_error1 import ApiV1BillingCreditsBalance503Error1
from ..models.api_v1_billing_credits_balance504_error1 import ApiV1BillingCreditsBalance504Error1

CreditGetCreditBalanceErrorBody: TypeAlias = (
    ApiV1BillingCreditsBalance400Error1
    | ApiV1BillingCreditsBalance401Error1
    | ApiV1BillingCreditsBalance403Error1
    | ApiV1BillingCreditsBalance404Error1
    | ApiV1BillingCreditsBalance429Error1
    | ApiV1BillingCreditsBalance500Error1
    | ApiV1BillingCreditsBalance502Error1
    | ApiV1BillingCreditsBalance503Error1
    | ApiV1BillingCreditsBalance504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _CreditGetCreditBalanceError:
    def map(self, status_code: int, content: bytes) -> CreditGetCreditBalanceErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1BillingCreditsBalance400Error1](content)
            case 401:
                return decode_json[ApiV1BillingCreditsBalance401Error1](content)
            case 403:
                return decode_json[ApiV1BillingCreditsBalance403Error1](content)
            case 404:
                return decode_json[ApiV1BillingCreditsBalance404Error1](content)
            case 429:
                return decode_json[ApiV1BillingCreditsBalance429Error1](content)
            case 500:
                return decode_json[ApiV1BillingCreditsBalance500Error1](content)
            case 502:
                return decode_json[ApiV1BillingCreditsBalance502Error1](content)
            case 503:
                return decode_json[ApiV1BillingCreditsBalance503Error1](content)
            case 504:
                return decode_json[ApiV1BillingCreditsBalance504Error1](content)
            case _:
                return RawError(status_code, content)


credit_get_credit_balance_error_mapper: Final[
    ErrorMapper[CreditGetCreditBalanceErrorBody]
] = _CreditGetCreditBalanceError()
