from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateObjectiveHealthErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateObjectiveHealthError:
    def map(self, status_code: int, content: bytes) -> CreateObjectiveHealthErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_objective_health_error_mapper: Final[ErrorMapper[CreateObjectiveHealthErrorBody]] = _CreateObjectiveHealthError()
