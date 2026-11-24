from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AssociateMacSecKeyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AssociateMacSecKeyError:
    def map(self, status_code: int, content: bytes) -> AssociateMacSecKeyErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


associate_mac_sec_key_error_mapper: Final[ErrorMapper[AssociateMacSecKeyErrorBody]] = _AssociateMacSecKeyError()
