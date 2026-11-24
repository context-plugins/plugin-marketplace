from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error2 import Error2

CreateStackErrorBody: TypeAlias = Error2 | RawError


@dataclass(frozen=True, slots=True)
class _CreateStackError:
    def map(self, status_code: int, content: bytes) -> CreateStackErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error2](content)
            case _:
                return RawError(status_code, content)


create_stack_error_mapper: Final[ErrorMapper[CreateStackErrorBody]] = _CreateStackError()
