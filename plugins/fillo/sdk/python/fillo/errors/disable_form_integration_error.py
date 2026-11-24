from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DisableFormIntegrationErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DisableFormIntegrationError:
    def map(self, status_code: int, content: bytes) -> DisableFormIntegrationErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


disable_form_integration_error_mapper: Final[
    ErrorMapper[DisableFormIntegrationErrorBody]
] = _DisableFormIntegrationError()
