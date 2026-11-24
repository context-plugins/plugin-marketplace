from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateCompanyLookupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateCompanyLookupError:
    def map(self, status_code: int, content: bytes) -> CreateCompanyLookupErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_company_lookup_error_mapper: Final[ErrorMapper[CreateCompanyLookupErrorBody]] = _CreateCompanyLookupError()
