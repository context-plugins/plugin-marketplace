from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListFileSharesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListFileSharesError:
    def map(self, status_code: int, content: bytes) -> ListFileSharesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_file_shares_error_mapper: Final[ErrorMapper[ListFileSharesErrorBody]] = _ListFileSharesError()
