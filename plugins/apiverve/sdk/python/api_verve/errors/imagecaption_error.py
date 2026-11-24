from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ImagecaptionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ImagecaptionError:
    def map(self, status_code: int, content: bytes) -> ImagecaptionErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


imagecaption_error_mapper: Final[ErrorMapper[ImagecaptionErrorBody]] = _ImagecaptionError()
