from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateCustomThemeErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateCustomThemeError:
    def map(self, status_code: int, content: bytes) -> CreateCustomThemeErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_custom_theme_error_mapper: Final[ErrorMapper[CreateCustomThemeErrorBody]] = _CreateCustomThemeError()
