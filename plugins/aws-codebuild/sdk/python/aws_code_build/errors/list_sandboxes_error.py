from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListSandboxesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListSandboxesError:
    def map(self, status_code: int, content: bytes) -> ListSandboxesErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_sandboxes_error_mapper: Final[ErrorMapper[ListSandboxesErrorBody]] = _ListSandboxesError()
