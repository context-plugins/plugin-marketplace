from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

MetricAssociationsControllerRemoveErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _MetricAssociationsControllerRemoveError:
    def map(self, status_code: int, content: bytes) -> MetricAssociationsControllerRemoveErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


metric_associations_controller_remove_error_mapper: Final[
    ErrorMapper[MetricAssociationsControllerRemoveErrorBody]
] = _MetricAssociationsControllerRemoveError()
