from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_contentstack_assets_api import ErrorContentstackAssetsApi

GetSingleAssetErrorBody: TypeAlias = ErrorContentstackAssetsApi | RawError


@dataclass(frozen=True, slots=True)
class _GetSingleAssetError:
    def map(self, status_code: int, content: bytes) -> GetSingleAssetErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorContentstackAssetsApi](content)
            case _:
                return RawError(status_code, content)


get_single_asset_error_mapper: Final[ErrorMapper[GetSingleAssetErrorBody]] = _GetSingleAssetError()
