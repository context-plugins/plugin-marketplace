from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

IdOfAssetErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _IdOfAssetError:
    def map(self, status_code: int, content: bytes) -> IdOfAssetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


id_of_asset_error_mapper: Final[ErrorMapper[IdOfAssetErrorBody]] = _IdOfAssetError()
