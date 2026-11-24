from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ReadabilityscoreErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ReadabilityscoreError:
    def map(self, status_code: int, content: bytes) -> ReadabilityscoreErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


readabilityscore_error_mapper: Final[ErrorMapper[ReadabilityscoreErrorBody]] = _ReadabilityscoreError()
