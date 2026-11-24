from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListEmailsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListEmailsError:
    def map(self, status_code: int, content: bytes) -> ListEmailsErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_emails_error_mapper: Final[ErrorMapper[ListEmailsErrorBody]] = _ListEmailsError()
