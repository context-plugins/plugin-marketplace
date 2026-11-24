from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

FilesizeformatterErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _FilesizeformatterError:
    def map(self, status_code: int, content: bytes) -> FilesizeformatterErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


filesizeformatter_error_mapper: Final[ErrorMapper[FilesizeformatterErrorBody]] = _FilesizeformatterError()
