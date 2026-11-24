from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DynatraceIntegrationControllerDeleteEnvironmentErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DynatraceIntegrationControllerDeleteEnvironmentError:
    def map(self, status_code: int, content: bytes) -> DynatraceIntegrationControllerDeleteEnvironmentErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


dynatrace_integration_controller_delete_environment_error_mapper: Final[
    ErrorMapper[DynatraceIntegrationControllerDeleteEnvironmentErrorBody]
] = _DynatraceIntegrationControllerDeleteEnvironmentError()
