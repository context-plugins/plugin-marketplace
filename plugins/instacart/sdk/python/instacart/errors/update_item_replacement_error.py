from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateItemReplacementErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateItemReplacementError:
    def map(self, status_code: int, content: bytes) -> UpdateItemReplacementErrorBody:
        match status_code:
            case 400 | 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_item_replacement_error_mapper: Final[ErrorMapper[UpdateItemReplacementErrorBody]] = _UpdateItemReplacementError()
