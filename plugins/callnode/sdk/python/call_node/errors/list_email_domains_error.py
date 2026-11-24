from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListEmailDomainsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListEmailDomainsError:
    def map(self, status_code: int, content: bytes) -> ListEmailDomainsErrorBody:
        match status_code:
            case 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_email_domains_error_mapper: Final[ErrorMapper[ListEmailDomainsErrorBody]] = _ListEmailDomainsError()
