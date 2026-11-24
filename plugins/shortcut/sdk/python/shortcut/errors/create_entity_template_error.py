from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateEntityTemplateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateEntityTemplateError:
    def map(self, status_code: int, content: bytes) -> CreateEntityTemplateErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_entity_template_error_mapper: Final[ErrorMapper[CreateEntityTemplateErrorBody]] = _CreateEntityTemplateError()
