from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteLinkedFileErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteLinkedFileError:
    def map(self, status_code: int, content: bytes) -> DeleteLinkedFileErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_linked_file_error_mapper: Final[ErrorMapper[DeleteLinkedFileErrorBody]] = _DeleteLinkedFileError()
