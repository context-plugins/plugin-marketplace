from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PostCreateGroupExportErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PostCreateGroupExportError:
    def map(self, status_code: int, content: bytes) -> PostCreateGroupExportErrorBody:
        match status_code:
            case 400 | 402 | 403 | 422 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


post_create_group_export_error_mapper: Final[
    ErrorMapper[PostCreateGroupExportErrorBody]
] = _PostCreateGroupExportError()
