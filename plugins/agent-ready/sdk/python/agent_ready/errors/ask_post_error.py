from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.unions.ask_response1 import AskResponse1

AskPostErrorBody: TypeAlias = Error | AskResponse1 | RawError


@dataclass(frozen=True, slots=True)
class _AskPostError:
    def map(self, status_code: int, content: bytes) -> AskPostErrorBody:
        match status_code:
            case 400 | 429 | 500 | 503:
                return decode_json[Error](content)
            case 404:
                return decode_json[AskResponse1](content)
            case _:
                return RawError(status_code, content)


ask_post_error_mapper: Final[ErrorMapper[AskPostErrorBody]] = _AskPostError()
