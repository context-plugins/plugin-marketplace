from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.errors_model import ErrorsModel

DeleteCustomApplicationBypassErrorBody: TypeAlias = ErrorsModel | RawError


@dataclass(frozen=True, slots=True)
class _DeleteCustomApplicationBypassError:
    def map(self, status_code: int, content: bytes) -> DeleteCustomApplicationBypassErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return decode_json[ErrorsModel](content)
            case _:
                return RawError(status_code, content)


delete_custom_application_bypass_error_mapper: Final[
    ErrorMapper[DeleteCustomApplicationBypassErrorBody]
] = _DeleteCustomApplicationBypassError()
