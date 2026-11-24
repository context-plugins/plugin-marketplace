from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_billing_billable_usage_quote400_error1 import ApiV1BillingBillableUsageQuote400Error1
from ..models.api_v1_billing_billable_usage_quote401_error1 import ApiV1BillingBillableUsageQuote401Error1
from ..models.api_v1_billing_billable_usage_quote403_error1 import ApiV1BillingBillableUsageQuote403Error1
from ..models.api_v1_billing_billable_usage_quote404_error1 import ApiV1BillingBillableUsageQuote404Error1
from ..models.api_v1_billing_billable_usage_quote429_error1 import ApiV1BillingBillableUsageQuote429Error1
from ..models.api_v1_billing_billable_usage_quote500_error1 import ApiV1BillingBillableUsageQuote500Error1
from ..models.api_v1_billing_billable_usage_quote502_error1 import ApiV1BillingBillableUsageQuote502Error1
from ..models.api_v1_billing_billable_usage_quote503_error1 import ApiV1BillingBillableUsageQuote503Error1
from ..models.api_v1_billing_billable_usage_quote504_error1 import ApiV1BillingBillableUsageQuote504Error1

CreditQuoteBillableUsageErrorBody: TypeAlias = (
    ApiV1BillingBillableUsageQuote400Error1
    | ApiV1BillingBillableUsageQuote401Error1
    | ApiV1BillingBillableUsageQuote403Error1
    | ApiV1BillingBillableUsageQuote404Error1
    | ApiV1BillingBillableUsageQuote429Error1
    | ApiV1BillingBillableUsageQuote500Error1
    | ApiV1BillingBillableUsageQuote502Error1
    | ApiV1BillingBillableUsageQuote503Error1
    | ApiV1BillingBillableUsageQuote504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _CreditQuoteBillableUsageError:
    def map(self, status_code: int, content: bytes) -> CreditQuoteBillableUsageErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1BillingBillableUsageQuote400Error1](content)
            case 401:
                return decode_json[ApiV1BillingBillableUsageQuote401Error1](content)
            case 403:
                return decode_json[ApiV1BillingBillableUsageQuote403Error1](content)
            case 404:
                return decode_json[ApiV1BillingBillableUsageQuote404Error1](content)
            case 429:
                return decode_json[ApiV1BillingBillableUsageQuote429Error1](content)
            case 500:
                return decode_json[ApiV1BillingBillableUsageQuote500Error1](content)
            case 502:
                return decode_json[ApiV1BillingBillableUsageQuote502Error1](content)
            case 503:
                return decode_json[ApiV1BillingBillableUsageQuote503Error1](content)
            case 504:
                return decode_json[ApiV1BillingBillableUsageQuote504Error1](content)
            case _:
                return RawError(status_code, content)


credit_quote_billable_usage_error_mapper: Final[
    ErrorMapper[CreditQuoteBillableUsageErrorBody]
] = _CreditQuoteBillableUsageError()
