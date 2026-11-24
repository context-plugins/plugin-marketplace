from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateGenericIntegrationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateGenericIntegrationError:
    def map(self, status_code: int, content: bytes) -> CreateGenericIntegrationErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_generic_integration_error_mapper: Final[
    ErrorMapper[CreateGenericIntegrationErrorBody]
] = _CreateGenericIntegrationError()
