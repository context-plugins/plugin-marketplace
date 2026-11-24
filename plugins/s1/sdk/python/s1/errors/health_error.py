from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

HealthErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _HealthError:
    def map(self, status_code: int, content: bytes) -> HealthErrorBody:
        match status_code:
            case 500:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


health_error_mapper: Final[ErrorMapper[HealthErrorBody]] = _HealthError()
