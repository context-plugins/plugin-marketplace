from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteAddonErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteAddonError:
    def map(self, status_code: int, content: bytes) -> DeleteAddonErrorBody:
        match status_code:
            case 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_addon_error_mapper: Final[ErrorMapper[DeleteAddonErrorBody]] = _DeleteAddonError()
