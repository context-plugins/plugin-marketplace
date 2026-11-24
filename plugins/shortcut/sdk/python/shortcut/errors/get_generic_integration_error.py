from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetGenericIntegrationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetGenericIntegrationError:
    def map(self, status_code: int, content: bytes) -> GetGenericIntegrationErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_generic_integration_error_mapper: Final[ErrorMapper[GetGenericIntegrationErrorBody]] = _GetGenericIntegrationError()
