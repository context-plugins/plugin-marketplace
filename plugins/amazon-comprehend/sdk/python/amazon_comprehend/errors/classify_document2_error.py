from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ClassifyDocument2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ClassifyDocument2Error:
    def map(self, status_code: int, content: bytes) -> ClassifyDocument2ErrorBody:
        match status_code:
            case 400 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


classify_document2_error_mapper: Final[ErrorMapper[ClassifyDocument2ErrorBody]] = _ClassifyDocument2Error()
