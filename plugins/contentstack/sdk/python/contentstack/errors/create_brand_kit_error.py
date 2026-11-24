from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateBrandKitErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateBrandKitError:
    def map(self, status_code: int, content: bytes) -> CreateBrandKitErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_brand_kit_error_mapper: Final[ErrorMapper[CreateBrandKitErrorBody]] = _CreateBrandKitError()
