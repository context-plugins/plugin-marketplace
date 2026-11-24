from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.validate_error_json import ValidateErrorJson

GetSyncTemplateErrorBody: TypeAlias = ValidateErrorJson | RawError


@dataclass(frozen=True, slots=True)
class _GetSyncTemplateError:
    def map(self, status_code: int, content: bytes) -> GetSyncTemplateErrorBody:
        match status_code:
            case 401 | 404:
                return RawError(status_code, content)
            case 422:
                return decode_json[ValidateErrorJson](content)
            case _:
                return RawError(status_code, content)


get_sync_template_error_mapper: Final[ErrorMapper[GetSyncTemplateErrorBody]] = _GetSyncTemplateError()
