from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateLinkedFileErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateLinkedFileError:
    def map(self, status_code: int, content: bytes) -> UpdateLinkedFileErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_linked_file_error_mapper: Final[ErrorMapper[UpdateLinkedFileErrorBody]] = _UpdateLinkedFileError()
