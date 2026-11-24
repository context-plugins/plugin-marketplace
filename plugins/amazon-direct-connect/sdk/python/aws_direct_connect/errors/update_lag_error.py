from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateLagErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateLagError:
    def map(self, status_code: int, content: bytes) -> UpdateLagErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_lag_error_mapper: Final[ErrorMapper[UpdateLagErrorBody]] = _UpdateLagError()
