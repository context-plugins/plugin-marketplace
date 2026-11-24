from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BatchGetFleetsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BatchGetFleetsError:
    def map(self, status_code: int, content: bytes) -> BatchGetFleetsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


batch_get_fleets_error_mapper: Final[ErrorMapper[BatchGetFleetsErrorBody]] = _BatchGetFleetsError()
