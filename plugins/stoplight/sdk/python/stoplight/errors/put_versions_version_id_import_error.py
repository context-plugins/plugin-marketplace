from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

PutVersionsVersionIdImportErrorBody: TypeAlias = Any | RawError


@dataclass(frozen=True, slots=True)
class _PutVersionsVersionIdImportError:
    def map(self, status_code: int, content: bytes) -> PutVersionsVersionIdImportErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Any](content)
            case _:
                return RawError(status_code, content)


put_versions_version_id_import_error_mapper: Final[
    ErrorMapper[PutVersionsVersionIdImportErrorBody]
] = _PutVersionsVersionIdImportError()
