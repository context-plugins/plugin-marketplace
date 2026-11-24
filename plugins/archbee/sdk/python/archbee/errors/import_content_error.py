from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.import_content400_error1 import ImportContent400Error1

ImportContentErrorBody: TypeAlias = ImportContent400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _ImportContentError:
    def map(self, status_code: int, content: bytes) -> ImportContentErrorBody:
        match status_code:
            case 400:
                return decode_json[ImportContent400Error1](content)
            case _:
                return RawError(status_code, content)


import_content_error_mapper: Final[ErrorMapper[ImportContentErrorBody]] = _ImportContentError()
