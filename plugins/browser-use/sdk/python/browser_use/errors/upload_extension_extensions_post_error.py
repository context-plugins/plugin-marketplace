from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UploadExtensionExtensionsPostErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UploadExtensionExtensionsPostError:
    def map(self, status_code: int, content: bytes) -> UploadExtensionExtensionsPostErrorBody:
        match status_code:
            case 403 | 413 | 422 | 503:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


upload_extension_extensions_post_error_mapper: Final[
    ErrorMapper[UploadExtensionExtensionsPostErrorBody]
] = _UploadExtensionExtensionsPostError()
