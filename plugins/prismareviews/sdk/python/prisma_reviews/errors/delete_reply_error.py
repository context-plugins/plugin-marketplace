from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteReplyErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteReplyError:
    def map(self, status_code: int, content: bytes) -> DeleteReplyErrorBody:
        match status_code:
            case 401 | 403 | 404 | 422 | 429 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_reply_error_mapper: Final[ErrorMapper[DeleteReplyErrorBody]] = _DeleteReplyError()
