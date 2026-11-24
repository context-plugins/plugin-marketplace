from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ImportModelErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ImportModelError:
    def map(self, status_code: int, content: bytes) -> ImportModelErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


import_model_error_mapper: Final[ErrorMapper[ImportModelErrorBody]] = _ImportModelError()
