from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_skribble_additional_information_api import ProblemSkribbleAdditionalInformationApi

GetBillingCreditsInfosErrorBody: TypeAlias = ProblemSkribbleAdditionalInformationApi | RawError


@dataclass(frozen=True, slots=True)
class _GetBillingCreditsInfosError:
    def map(self, status_code: int, content: bytes) -> GetBillingCreditsInfosErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500 | 503:
                return decode_json[ProblemSkribbleAdditionalInformationApi](content)
            case _:
                return RawError(status_code, content)


get_billing_credits_infos_error_mapper: Final[
    ErrorMapper[GetBillingCreditsInfosErrorBody]
] = _GetBillingCreditsInfosError()
