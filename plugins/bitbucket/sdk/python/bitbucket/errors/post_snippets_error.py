from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PostSnippetsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PostSnippetsError:
    def map(self, status_code: int, content: bytes) -> PostSnippetsErrorBody:
        match status_code:
            case 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


post_snippets_error_mapper: Final[ErrorMapper[PostSnippetsErrorBody]] = _PostSnippetsError()
