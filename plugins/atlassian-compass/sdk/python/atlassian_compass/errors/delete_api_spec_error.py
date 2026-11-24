from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

DeleteApiSpecErrorBody: TypeAlias = str | RawError


@dataclass(frozen=True, slots=True)
class _DeleteApiSpecError:
    def map(self, status_code: int, content: bytes) -> DeleteApiSpecErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


delete_api_spec_error_mapper: Final[ErrorMapper[DeleteApiSpecErrorBody]] = _DeleteApiSpecError()
