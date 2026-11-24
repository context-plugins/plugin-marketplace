from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListCustomThemesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListCustomThemesError:
    def map(self, status_code: int, content: bytes) -> ListCustomThemesErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_custom_themes_error_mapper: Final[ErrorMapper[ListCustomThemesErrorBody]] = _ListCustomThemesError()
