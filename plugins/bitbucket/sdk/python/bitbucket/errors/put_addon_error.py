from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PutAddonErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PutAddonError:
    def map(self, status_code: int, content: bytes) -> PutAddonErrorBody:
        match status_code:
            case 400 | 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


put_addon_error_mapper: Final[ErrorMapper[PutAddonErrorBody]] = _PutAddonError()
