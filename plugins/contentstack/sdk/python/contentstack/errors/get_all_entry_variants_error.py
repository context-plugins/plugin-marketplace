from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_contentstack_assets_api import ErrorContentstackAssetsApi

GetAllEntryVariantsErrorBody: TypeAlias = ErrorContentstackAssetsApi | RawError


@dataclass(frozen=True, slots=True)
class _GetAllEntryVariantsError:
    def map(self, status_code: int, content: bytes) -> GetAllEntryVariantsErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorContentstackAssetsApi](content)
            case _:
                return RawError(status_code, content)


get_all_entry_variants_error_mapper: Final[ErrorMapper[GetAllEntryVariantsErrorBody]] = _GetAllEntryVariantsError()
