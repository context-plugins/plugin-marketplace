from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListAccountsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListAccountsError:
    def map(self, status_code: int, content: bytes) -> ListAccountsErrorBody:
        match status_code:
            case 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_accounts_error_mapper: Final[ErrorMapper[ListAccountsErrorBody]] = _ListAccountsError()
