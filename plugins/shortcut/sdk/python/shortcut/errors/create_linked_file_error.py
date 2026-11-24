from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateLinkedFileErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateLinkedFileError:
    def map(self, status_code: int, content: bytes) -> CreateLinkedFileErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_linked_file_error_mapper: Final[ErrorMapper[CreateLinkedFileErrorBody]] = _CreateLinkedFileError()
