from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_contentstack_assets_api import ErrorContentstackAssetsApi

GetSingleEntryVariantErrorBody: TypeAlias = ErrorContentstackAssetsApi | RawError


@dataclass(frozen=True, slots=True)
class _GetSingleEntryVariantError:
    def map(self, status_code: int, content: bytes) -> GetSingleEntryVariantErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorContentstackAssetsApi](content)
            case _:
                return RawError(status_code, content)


get_single_entry_variant_error_mapper: Final[
    ErrorMapper[GetSingleEntryVariantErrorBody]
] = _GetSingleEntryVariantError()
