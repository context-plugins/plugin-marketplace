from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListAcmeAccountsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListAcmeAccountsError:
    def map(self, status_code: int, content: bytes) -> ListAcmeAccountsErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_acme_accounts_error_mapper: Final[ErrorMapper[ListAcmeAccountsErrorBody]] = _ListAcmeAccountsError()
