from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateSubnetErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateSubnetError:
    def map(self, status_code: int, content: bytes) -> CreateSubnetErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_subnet_error_mapper: Final[ErrorMapper[CreateSubnetErrorBody]] = _CreateSubnetError()
