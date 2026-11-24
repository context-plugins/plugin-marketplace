from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListDomainsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListDomainsError:
    def map(self, status_code: int, content: bytes) -> ListDomainsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_domains_error_mapper: Final[ErrorMapper[ListDomainsErrorBody]] = _ListDomainsError()
