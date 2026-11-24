from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.authentication_error_cloro_dev_countries_api import AuthenticationErrorCloroDevCountriesApi
from ..models.internal_error_cloro_dev_countries_api import InternalErrorCloroDevCountriesApi
from ..models.rate_limit_error_cloro_dev_states_api import RateLimitErrorCloroDevStatesApi
from ..models.validation_error_cloro_dev_countries_api import ValidationErrorCloroDevCountriesApi

GetStatesErrorBody: TypeAlias = (
    ValidationErrorCloroDevCountriesApi
    | AuthenticationErrorCloroDevCountriesApi
    | RateLimitErrorCloroDevStatesApi
    | InternalErrorCloroDevCountriesApi
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetStatesError:
    def map(self, status_code: int, content: bytes) -> GetStatesErrorBody:
        match status_code:
            case 400:
                return decode_json[ValidationErrorCloroDevCountriesApi](content)
            case 401:
                return decode_json[AuthenticationErrorCloroDevCountriesApi](content)
            case 429:
                return decode_json[RateLimitErrorCloroDevStatesApi](content)
            case 500:
                return decode_json[InternalErrorCloroDevCountriesApi](content)
            case _:
                return RawError(status_code, content)


get_states_error_mapper: Final[ErrorMapper[GetStatesErrorBody]] = _GetStatesError()
