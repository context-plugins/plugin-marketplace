from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DiscoverCompanyContactsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DiscoverCompanyContactsError:
    def map(self, status_code: int, content: bytes) -> DiscoverCompanyContactsErrorBody:
        match status_code:
            case 400 | 427 | 500:
                return decode_json[Error](content)
            case 401 | 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


discover_company_contacts_error_mapper: Final[
    ErrorMapper[DiscoverCompanyContactsErrorBody]
] = _DiscoverCompanyContactsError()
