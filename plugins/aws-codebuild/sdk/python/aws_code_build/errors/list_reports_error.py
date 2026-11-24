from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListReportsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListReportsError:
    def map(self, status_code: int, content: bytes) -> ListReportsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_reports_error_mapper: Final[ErrorMapper[ListReportsErrorBody]] = _ListReportsError()
