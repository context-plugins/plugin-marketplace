from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateVpcErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateVpcError:
    def map(self, status_code: int, content: bytes) -> CreateVpcErrorBody:
        match status_code:
            case 400 | 401 | 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_vpc_error_mapper: Final[ErrorMapper[CreateVpcErrorBody]] = _CreateVpcError()
