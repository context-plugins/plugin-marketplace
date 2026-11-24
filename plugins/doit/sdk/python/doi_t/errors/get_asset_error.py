from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetAssetErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetAssetError:
    def map(self, status_code: int, content: bytes) -> GetAssetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_asset_error_mapper: Final[ErrorMapper[GetAssetErrorBody]] = _GetAssetError()
