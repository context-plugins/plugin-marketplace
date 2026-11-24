from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.validate_error_json import ValidateErrorJson

ReprocessStatusErrorBody: TypeAlias = ValidateErrorJson | RawError


@dataclass(frozen=True, slots=True)
class _ReprocessStatusError:
    def map(self, status_code: int, content: bytes) -> ReprocessStatusErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return RawError(status_code, content)
            case 422:
                return decode_json[ValidateErrorJson](content)
            case _:
                return RawError(status_code, content)


reprocess_status_error_mapper: Final[ErrorMapper[ReprocessStatusErrorBody]] = _ReprocessStatusError()
