from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListSandboxesForProjectErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListSandboxesForProjectError:
    def map(self, status_code: int, content: bytes) -> ListSandboxesForProjectErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_sandboxes_for_project_error_mapper: Final[
    ErrorMapper[ListSandboxesForProjectErrorBody]
] = _ListSandboxesForProjectError()
