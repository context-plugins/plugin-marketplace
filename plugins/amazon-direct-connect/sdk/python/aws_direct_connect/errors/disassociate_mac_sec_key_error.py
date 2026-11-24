from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DisassociateMacSecKeyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DisassociateMacSecKeyError:
    def map(self, status_code: int, content: bytes) -> DisassociateMacSecKeyErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


disassociate_mac_sec_key_error_mapper: Final[
    ErrorMapper[DisassociateMacSecKeyErrorBody]
] = _DisassociateMacSecKeyError()
