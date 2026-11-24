from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteLagErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteLagError:
    def map(self, status_code: int, content: bytes) -> DeleteLagErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_lag_error_mapper: Final[ErrorMapper[DeleteLagErrorBody]] = _DeleteLagError()
