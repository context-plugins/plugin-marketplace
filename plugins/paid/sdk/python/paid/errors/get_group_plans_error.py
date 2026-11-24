from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetGroupPlansErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetGroupPlansError:
    def map(self, status_code: int, content: bytes) -> GetGroupPlansErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_group_plans_error_mapper: Final[ErrorMapper[GetGroupPlansErrorBody]] = _GetGroupPlansError()
