from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.authorization_exception1 import AuthorizationException1
from ..models.model_not_found_exception1 import ModelNotFoundException1
from ..models.v1_campaigns_discount_codes422_error1 import V1CampaignsDiscountCodes422Error1

CampaignsDiscountCodesDestroyErrorBody: TypeAlias = (
    AuthorizationException1 | ModelNotFoundException1 | V1CampaignsDiscountCodes422Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _CampaignsDiscountCodesDestroyError:
    def map(self, status_code: int, content: bytes) -> CampaignsDiscountCodesDestroyErrorBody:
        match status_code:
            case 403:
                return decode_json[AuthorizationException1](content)
            case 404:
                return decode_json[ModelNotFoundException1](content)
            case 422:
                return decode_json[V1CampaignsDiscountCodes422Error1](content)
            case _:
                return RawError(status_code, content)


campaigns_discount_codes_destroy_error_mapper: Final[
    ErrorMapper[CampaignsDiscountCodesDestroyErrorBody]
] = _CampaignsDiscountCodesDestroyError()
