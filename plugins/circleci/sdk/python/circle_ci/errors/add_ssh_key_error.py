from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AddSshKeyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AddSshKeyError:
    def map(self, status_code: int, content: bytes) -> AddSshKeyErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


add_ssh_key_error_mapper: Final[ErrorMapper[AddSshKeyErrorBody]] = _AddSshKeyError()
