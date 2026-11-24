from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreatePersonAndCompanyLookupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreatePersonAndCompanyLookupError:
    def map(self, status_code: int, content: bytes) -> CreatePersonAndCompanyLookupErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_person_and_company_lookup_error_mapper: Final[
    ErrorMapper[CreatePersonAndCompanyLookupErrorBody]
] = _CreatePersonAndCompanyLookupError()
