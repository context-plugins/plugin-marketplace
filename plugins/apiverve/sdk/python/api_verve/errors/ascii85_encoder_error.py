from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

Ascii85EncoderErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _Ascii85EncoderError:
    def map(self, status_code: int, content: bytes) -> Ascii85EncoderErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


ascii85_encoder_error_mapper: Final[ErrorMapper[Ascii85EncoderErrorBody]] = _Ascii85EncoderError()
