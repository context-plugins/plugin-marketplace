from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DisableIterationsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DisableIterationsError:
    def map(self, status_code: int, content: bytes) -> DisableIterationsErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


disable_iterations_error_mapper: Final[ErrorMapper[DisableIterationsErrorBody]] = _DisableIterationsError()
