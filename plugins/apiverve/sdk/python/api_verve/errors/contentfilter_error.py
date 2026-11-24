from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ContentfilterErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ContentfilterError:
    def map(self, status_code: int, content: bytes) -> ContentfilterErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


contentfilter_error_mapper: Final[ErrorMapper[ContentfilterErrorBody]] = _ContentfilterError()
