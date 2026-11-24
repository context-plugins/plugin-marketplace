from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.authentication_error_cloro_dev_credits_api import AuthenticationErrorCloroDevCreditsApi
from ..models.internal_error_cloro_dev_credits_api import InternalErrorCloroDevCreditsApi
from ..models.rate_limit_error_cloro_dev_credits_api import RateLimitErrorCloroDevCreditsApi

GetCreditsErrorBody: TypeAlias = (
    AuthenticationErrorCloroDevCreditsApi
    | RateLimitErrorCloroDevCreditsApi
    | InternalErrorCloroDevCreditsApi
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetCreditsError:
    def map(self, status_code: int, content: bytes) -> GetCreditsErrorBody:
        match status_code:
            case 401:
                return decode_json[AuthenticationErrorCloroDevCreditsApi](content)
            case 429:
                return decode_json[RateLimitErrorCloroDevCreditsApi](content)
            case 500:
                return decode_json[InternalErrorCloroDevCreditsApi](content)
            case _:
                return RawError(status_code, content)


get_credits_error_mapper: Final[ErrorMapper[GetCreditsErrorBody]] = _GetCreditsError()
