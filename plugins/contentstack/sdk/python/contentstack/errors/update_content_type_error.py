from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error2 import Error2
from ..models.error_contentstack_assets_api import ErrorContentstackAssetsApi

UpdateContentTypeErrorBody: TypeAlias = Error2 | ErrorContentstackAssetsApi | RawError


@dataclass(frozen=True, slots=True)
class _UpdateContentTypeError:
    def map(self, status_code: int, content: bytes) -> UpdateContentTypeErrorBody:
        match status_code:
            case 400:
                return decode_json[Error2](content)
            case 401:
                return decode_json[ErrorContentstackAssetsApi](content)
            case _:
                return RawError(status_code, content)


update_content_type_error_mapper: Final[ErrorMapper[UpdateContentTypeErrorBody]] = _UpdateContentTypeError()
