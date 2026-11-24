from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

GetExtensionExtensionsExtensionIdGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetExtensionExtensionsExtensionIdGetError:
    def map(self, status_code: int, content: bytes) -> GetExtensionExtensionsExtensionIdGetErrorBody:
        match status_code:
            case 404:
                return RawError(status_code, content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_extension_extensions_extension_id_get_error_mapper: Final[
    ErrorMapper[GetExtensionExtensionsExtensionIdGetErrorBody]
] = _GetExtensionExtensionsExtensionIdGetError()
