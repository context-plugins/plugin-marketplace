from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

MetricAssociationsControllerCreateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _MetricAssociationsControllerCreateError:
    def map(self, status_code: int, content: bytes) -> MetricAssociationsControllerCreateErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


metric_associations_controller_create_error_mapper: Final[
    ErrorMapper[MetricAssociationsControllerCreateErrorBody]
] = _MetricAssociationsControllerCreateError()
