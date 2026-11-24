from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateTapeWithBarcodeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateTapeWithBarcodeError:
    def map(self, status_code: int, content: bytes) -> CreateTapeWithBarcodeErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_tape_with_barcode_error_mapper: Final[
    ErrorMapper[CreateTapeWithBarcodeErrorBody]
] = _CreateTapeWithBarcodeError()
