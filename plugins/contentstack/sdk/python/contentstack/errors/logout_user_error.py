from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error2 import Error2

LogoutUserErrorBody: TypeAlias = Error2 | RawError


@dataclass(frozen=True, slots=True)
class _LogoutUserError:
    def map(self, status_code: int, content: bytes) -> LogoutUserErrorBody:
        match status_code:
            case 401:
                return decode_json[Error2](content)
            case _:
                return RawError(status_code, content)


logout_user_error_mapper: Final[ErrorMapper[LogoutUserErrorBody]] = _LogoutUserError()
