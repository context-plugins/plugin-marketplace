from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListDatasetsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListDatasetsError:
    def map(self, status_code: int, content: bytes) -> ListDatasetsErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_datasets_error_mapper: Final[ErrorMapper[ListDatasetsErrorBody]] = _ListDatasetsError()
