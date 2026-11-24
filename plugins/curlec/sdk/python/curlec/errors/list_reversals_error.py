from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListReversalsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListReversalsError:
    def map(self, status_code: int, content: bytes) -> ListReversalsErrorBody:
        match status_code:
            case 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_reversals_error_mapper: Final[ErrorMapper[ListReversalsErrorBody]] = _ListReversalsError()
