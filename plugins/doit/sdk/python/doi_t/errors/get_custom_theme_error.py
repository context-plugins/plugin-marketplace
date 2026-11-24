from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetCustomThemeErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetCustomThemeError:
    def map(self, status_code: int, content: bytes) -> GetCustomThemeErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_custom_theme_error_mapper: Final[ErrorMapper[GetCustomThemeErrorBody]] = _GetCustomThemeError()
