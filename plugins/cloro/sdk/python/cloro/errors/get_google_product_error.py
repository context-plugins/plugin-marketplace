from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.authentication_error_cloro_dev_monitor_api import AuthenticationErrorCloroDevMonitorApi
from ..models.canceled_error import CanceledError
from ..models.concurrent_limit_error import ConcurrentLimitError
from ..models.external_service_error import ExternalServiceError
from ..models.forbidden_error_cloro_dev_monitor_api import ForbiddenErrorCloroDevMonitorApi
from ..models.internal_error import InternalError
from ..models.not_found_error import NotFoundError
from ..models.validation_error_cloro_dev_monitor_api import ValidationErrorCloroDevMonitorApi

GetGoogleProductErrorBody: TypeAlias = (
    ValidationErrorCloroDevMonitorApi
    | AuthenticationErrorCloroDevMonitorApi
    | ForbiddenErrorCloroDevMonitorApi
    | NotFoundError
    | ConcurrentLimitError
    | CanceledError
    | InternalError
    | ExternalServiceError
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetGoogleProductError:
    def map(self, status_code: int, content: bytes) -> GetGoogleProductErrorBody:
        match status_code:
            case 400:
                return decode_json[ValidationErrorCloroDevMonitorApi](content)
            case 401:
                return decode_json[AuthenticationErrorCloroDevMonitorApi](content)
            case 403:
                return decode_json[ForbiddenErrorCloroDevMonitorApi](content)
            case 404 | 410:
                return decode_json[NotFoundError](content)
            case 429:
                return decode_json[ConcurrentLimitError](content)
            case 499:
                return decode_json[CanceledError](content)
            case 500:
                return decode_json[InternalError](content)
            case 502:
                return decode_json[ExternalServiceError](content)
            case _:
                return RawError(status_code, content)


get_google_product_error_mapper: Final[ErrorMapper[GetGoogleProductErrorBody]] = _GetGoogleProductError()
