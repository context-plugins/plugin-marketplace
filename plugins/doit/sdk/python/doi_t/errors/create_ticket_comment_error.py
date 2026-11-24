from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateTicketCommentErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateTicketCommentError:
    def map(self, status_code: int, content: bytes) -> CreateTicketCommentErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_ticket_comment_error_mapper: Final[ErrorMapper[CreateTicketCommentErrorBody]] = _CreateTicketCommentError()
