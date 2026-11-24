from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

BatchGetSandboxesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _BatchGetSandboxesError:
    def map(self, status_code: int, content: bytes) -> BatchGetSandboxesErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


batch_get_sandboxes_error_mapper: Final[ErrorMapper[BatchGetSandboxesErrorBody]] = _BatchGetSandboxesError()
