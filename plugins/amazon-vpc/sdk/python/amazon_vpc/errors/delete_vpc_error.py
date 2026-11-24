from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteVpcErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteVpcError:
    def map(self, status_code: int, content: bytes) -> DeleteVpcErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_vpc_error_mapper: Final[ErrorMapper[DeleteVpcErrorBody]] = _DeleteVpcError()
