from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error2 import Error2

GetStackErrorBody: TypeAlias = Error2 | RawError


@dataclass(frozen=True, slots=True)
class _GetStackError:
    def map(self, status_code: int, content: bytes) -> GetStackErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error2](content)
            case _:
                return RawError(status_code, content)


get_stack_error_mapper: Final[ErrorMapper[GetStackErrorBody]] = _GetStackError()
