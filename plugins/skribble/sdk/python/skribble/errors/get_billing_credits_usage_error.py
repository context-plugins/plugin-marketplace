from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_skribble_additional_information_api import ProblemSkribbleAdditionalInformationApi

GetBillingCreditsUsageErrorBody: TypeAlias = ProblemSkribbleAdditionalInformationApi | RawError


@dataclass(frozen=True, slots=True)
class _GetBillingCreditsUsageError:
    def map(self, status_code: int, content: bytes) -> GetBillingCreditsUsageErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500 | 503:
                return decode_json[ProblemSkribbleAdditionalInformationApi](content)
            case _:
                return RawError(status_code, content)


get_billing_credits_usage_error_mapper: Final[
    ErrorMapper[GetBillingCreditsUsageErrorBody]
] = _GetBillingCreditsUsageError()
