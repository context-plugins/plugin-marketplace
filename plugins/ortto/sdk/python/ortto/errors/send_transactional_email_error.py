from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

SendTransactionalEmailErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _SendTransactionalEmailError:
    def map(self, status_code: int, content: bytes) -> SendTransactionalEmailErrorBody:
        match status_code:
            case 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


send_transactional_email_error_mapper: Final[
    ErrorMapper[SendTransactionalEmailErrorBody]
] = _SendTransactionalEmailError()
