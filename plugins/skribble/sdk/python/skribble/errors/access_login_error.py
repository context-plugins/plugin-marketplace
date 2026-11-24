from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem import Problem

AccessLoginErrorBody: TypeAlias = Problem | RawError


@dataclass(frozen=True, slots=True)
class _AccessLoginError:
    def map(self, status_code: int, content: bytes) -> AccessLoginErrorBody:
        match status_code:
            case 400 | 403 | 406 | 429 | 500 | 503:
                return decode_json[Problem](content)
            case _:
                return RawError(status_code, content)


access_login_error_mapper: Final[ErrorMapper[AccessLoginErrorBody]] = _AccessLoginError()
