from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListSyncTemplatesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListSyncTemplatesError:
    def map(self, status_code: int, content: bytes) -> ListSyncTemplatesErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_sync_templates_error_mapper: Final[ErrorMapper[ListSyncTemplatesErrorBody]] = _ListSyncTemplatesError()
