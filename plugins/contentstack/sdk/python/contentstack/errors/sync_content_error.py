from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_contentstack_assets_api import ErrorContentstackAssetsApi

SyncContentErrorBody: TypeAlias = ErrorContentstackAssetsApi | RawError


@dataclass(frozen=True, slots=True)
class _SyncContentError:
    def map(self, status_code: int, content: bytes) -> SyncContentErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorContentstackAssetsApi](content)
            case _:
                return RawError(status_code, content)


sync_content_error_mapper: Final[ErrorMapper[SyncContentErrorBody]] = _SyncContentError()
