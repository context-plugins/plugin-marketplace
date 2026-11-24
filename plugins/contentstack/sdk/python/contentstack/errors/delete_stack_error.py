from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error2 import Error2

DeleteStackErrorBody: TypeAlias = Error2 | RawError


@dataclass(frozen=True, slots=True)
class _DeleteStackError:
    def map(self, status_code: int, content: bytes) -> DeleteStackErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error2](content)
            case _:
                return RawError(status_code, content)


delete_stack_error_mapper: Final[ErrorMapper[DeleteStackErrorBody]] = _DeleteStackError()
