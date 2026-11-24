from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FetchLinkedAccountErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FetchLinkedAccountError:
    def map(self, status_code: int, content: bytes) -> FetchLinkedAccountErrorBody:
        match status_code:
            case 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


fetch_linked_account_error_mapper: Final[ErrorMapper[FetchLinkedAccountErrorBody]] = _FetchLinkedAccountError()
