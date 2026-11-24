from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetEntityTemplateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetEntityTemplateError:
    def map(self, status_code: int, content: bytes) -> GetEntityTemplateErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_entity_template_error_mapper: Final[ErrorMapper[GetEntityTemplateErrorBody]] = _GetEntityTemplateError()
