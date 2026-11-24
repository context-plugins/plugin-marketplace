from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_contentstack_assets_api import ErrorContentstackAssetsApi

GetAllContentTypesErrorBody: TypeAlias = ErrorContentstackAssetsApi | RawError


@dataclass(frozen=True, slots=True)
class _GetAllContentTypesError:
    def map(self, status_code: int, content: bytes) -> GetAllContentTypesErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorContentstackAssetsApi](content)
            case _:
                return RawError(status_code, content)


get_all_content_types_error_mapper: Final[ErrorMapper[GetAllContentTypesErrorBody]] = _GetAllContentTypesError()
