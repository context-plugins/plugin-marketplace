from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetLinkedFileErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetLinkedFileError:
    def map(self, status_code: int, content: bytes) -> GetLinkedFileErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_linked_file_error_mapper: Final[ErrorMapper[GetLinkedFileErrorBody]] = _GetLinkedFileError()
