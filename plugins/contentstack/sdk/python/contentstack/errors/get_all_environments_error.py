from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error2 import Error2

GetAllEnvironmentsErrorBody: TypeAlias = Error2 | RawError


@dataclass(frozen=True, slots=True)
class _GetAllEnvironmentsError:
    def map(self, status_code: int, content: bytes) -> GetAllEnvironmentsErrorBody:
        match status_code:
            case 401:
                return decode_json[Error2](content)
            case _:
                return RawError(status_code, content)


get_all_environments_error_mapper: Final[ErrorMapper[GetAllEnvironmentsErrorBody]] = _GetAllEnvironmentsError()
