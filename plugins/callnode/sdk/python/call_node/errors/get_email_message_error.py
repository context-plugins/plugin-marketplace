from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetEmailMessageErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetEmailMessageError:
    def map(self, status_code: int, content: bytes) -> GetEmailMessageErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_email_message_error_mapper: Final[ErrorMapper[GetEmailMessageErrorBody]] = _GetEmailMessageError()
