from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

RegisterAccountErrorBody: TypeAlias = Any | RawError


@dataclass(frozen=True, slots=True)
class _RegisterAccountError:
    def map(self, status_code: int, content: bytes) -> RegisterAccountErrorBody:
        match status_code:
            case 400:
                return decode_json[Any](content)
            case _:
                return RawError(status_code, content)


register_account_error_mapper: Final[ErrorMapper[RegisterAccountErrorBody]] = _RegisterAccountError()
