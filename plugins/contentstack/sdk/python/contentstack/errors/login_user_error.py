from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error2 import Error2

LoginUserErrorBody: TypeAlias = Error2 | RawError


@dataclass(frozen=True, slots=True)
class _LoginUserError:
    def map(self, status_code: int, content: bytes) -> LoginUserErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error2](content)
            case _:
                return RawError(status_code, content)


login_user_error_mapper: Final[ErrorMapper[LoginUserErrorBody]] = _LoginUserError()
