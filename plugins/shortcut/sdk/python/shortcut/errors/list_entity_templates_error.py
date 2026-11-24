from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListEntityTemplatesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListEntityTemplatesError:
    def map(self, status_code: int, content: bytes) -> ListEntityTemplatesErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_entity_templates_error_mapper: Final[ErrorMapper[ListEntityTemplatesErrorBody]] = _ListEntityTemplatesError()
