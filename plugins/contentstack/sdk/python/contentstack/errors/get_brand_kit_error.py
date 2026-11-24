from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetBrandKitErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetBrandKitError:
    def map(self, status_code: int, content: bytes) -> GetBrandKitErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_brand_kit_error_mapper: Final[ErrorMapper[GetBrandKitErrorBody]] = _GetBrandKitError()
