from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.authentication_error_cloro_dev_countries_api import AuthenticationErrorCloroDevCountriesApi
from ..models.internal_error_cloro_dev_countries_api import InternalErrorCloroDevCountriesApi
from ..models.not_found_error_cloro_dev_countries_api import NotFoundErrorCloroDevCountriesApi
from ..models.rate_limit_error_cloro_dev_countries_api import RateLimitErrorCloroDevCountriesApi
from ..models.validation_error_cloro_dev_countries_api import ValidationErrorCloroDevCountriesApi

GetCountriesErrorBody: TypeAlias = (
    ValidationErrorCloroDevCountriesApi
    | AuthenticationErrorCloroDevCountriesApi
    | NotFoundErrorCloroDevCountriesApi
    | RateLimitErrorCloroDevCountriesApi
    | InternalErrorCloroDevCountriesApi
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetCountriesError:
    def map(self, status_code: int, content: bytes) -> GetCountriesErrorBody:
        match status_code:
            case 400:
                return decode_json[ValidationErrorCloroDevCountriesApi](content)
            case 401:
                return decode_json[AuthenticationErrorCloroDevCountriesApi](content)
            case 404:
                return decode_json[NotFoundErrorCloroDevCountriesApi](content)
            case 429:
                return decode_json[RateLimitErrorCloroDevCountriesApi](content)
            case 500:
                return decode_json[InternalErrorCloroDevCountriesApi](content)
            case _:
                return RawError(status_code, content)


get_countries_error_mapper: Final[ErrorMapper[GetCountriesErrorBody]] = _GetCountriesError()
