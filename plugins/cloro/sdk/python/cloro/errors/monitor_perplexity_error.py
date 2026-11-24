from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.authentication_error_cloro_dev_monitor_api import AuthenticationErrorCloroDevMonitorApi
from ..models.canceled_error import CanceledError
from ..models.concurrent_limit_error import ConcurrentLimitError
from ..models.forbidden_error_cloro_dev_monitor_api import ForbiddenErrorCloroDevMonitorApi
from ..models.internal_error import InternalError
from ..models.validation_error_cloro_dev_monitor_api import ValidationErrorCloroDevMonitorApi

MonitorPerplexityErrorBody: TypeAlias = (
    ValidationErrorCloroDevMonitorApi
    | AuthenticationErrorCloroDevMonitorApi
    | ForbiddenErrorCloroDevMonitorApi
    | ConcurrentLimitError
    | CanceledError
    | InternalError
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MonitorPerplexityError:
    def map(self, status_code: int, content: bytes) -> MonitorPerplexityErrorBody:
        match status_code:
            case 400:
                return decode_json[ValidationErrorCloroDevMonitorApi](content)
            case 401:
                return decode_json[AuthenticationErrorCloroDevMonitorApi](content)
            case 403:
                return decode_json[ForbiddenErrorCloroDevMonitorApi](content)
            case 429:
                return decode_json[ConcurrentLimitError](content)
            case 499:
                return decode_json[CanceledError](content)
            case 500:
                return decode_json[InternalError](content)
            case _:
                return RawError(status_code, content)


monitor_perplexity_error_mapper: Final[ErrorMapper[MonitorPerplexityErrorBody]] = _MonitorPerplexityError()
