from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DynatraceIntegrationControllerCreateIntegrationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DynatraceIntegrationControllerCreateIntegrationError:
    def map(self, status_code: int, content: bytes) -> DynatraceIntegrationControllerCreateIntegrationErrorBody:
        match status_code:
            case 400 | 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


dynatrace_integration_controller_create_integration_error_mapper: Final[
    ErrorMapper[DynatraceIntegrationControllerCreateIntegrationErrorBody]
] = _DynatraceIntegrationControllerCreateIntegrationError()
