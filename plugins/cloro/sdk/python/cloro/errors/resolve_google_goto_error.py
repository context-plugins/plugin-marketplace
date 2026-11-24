from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.authentication_error_cloro_dev_monitor_api import AuthenticationErrorCloroDevMonitorApi
from ..models.external_service_error import ExternalServiceError
from ..models.internal_error import InternalError
from ..models.rate_limit_error import RateLimitError
from ..models.validation_error_cloro_dev_monitor_api import ValidationErrorCloroDevMonitorApi

ResolveGoogleGotoErrorBody: TypeAlias = (
    ValidationErrorCloroDevMonitorApi
    | AuthenticationErrorCloroDevMonitorApi
    | RateLimitError
    | InternalError
    | ExternalServiceError
    | RawError
)


@dataclass(frozen=True, slots=True)
class _ResolveGoogleGotoError:
    def map(self, status_code: int, content: bytes) -> ResolveGoogleGotoErrorBody:
        match status_code:
            case 400:
                return decode_json[ValidationErrorCloroDevMonitorApi](content)
            case 401:
                return decode_json[AuthenticationErrorCloroDevMonitorApi](content)
            case 429:
                return decode_json[RateLimitError](content)
            case 500:
                return decode_json[InternalError](content)
            case 502:
                return decode_json[ExternalServiceError](content)
            case _:
                return RawError(status_code, content)


resolve_google_goto_error_mapper: Final[ErrorMapper[ResolveGoogleGotoErrorBody]] = _ResolveGoogleGotoError()
