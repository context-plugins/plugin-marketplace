from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListKnownIssuesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListKnownIssuesError:
    def map(self, status_code: int, content: bytes) -> ListKnownIssuesErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_known_issues_error_mapper: Final[ErrorMapper[ListKnownIssuesErrorBody]] = _ListKnownIssuesError()
