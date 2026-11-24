from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListCustomFieldsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListCustomFieldsError:
    def map(self, status_code: int, content: bytes) -> ListCustomFieldsErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_custom_fields_error_mapper: Final[ErrorMapper[ListCustomFieldsErrorBody]] = _ListCustomFieldsError()
