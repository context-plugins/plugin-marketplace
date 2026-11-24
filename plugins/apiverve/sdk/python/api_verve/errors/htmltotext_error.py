from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

HtmltotextErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _HtmltotextError:
    def map(self, status_code: int, content: bytes) -> HtmltotextErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


htmltotext_error_mapper: Final[ErrorMapper[HtmltotextErrorBody]] = _HtmltotextError()
