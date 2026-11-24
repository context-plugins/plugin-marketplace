from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SearchCompaniesByFilterErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SearchCompaniesByFilterError:
    def map(self, status_code: int, content: bytes) -> SearchCompaniesByFilterErrorBody:
        match status_code:
            case 401 | 402 | 429:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


search_companies_by_filter_error_mapper: Final[
    ErrorMapper[SearchCompaniesByFilterErrorBody]
] = _SearchCompaniesByFilterError()
