from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BatchGetReportsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BatchGetReportsError:
    def map(self, status_code: int, content: bytes) -> BatchGetReportsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


batch_get_reports_error_mapper: Final[ErrorMapper[BatchGetReportsErrorBody]] = _BatchGetReportsError()
