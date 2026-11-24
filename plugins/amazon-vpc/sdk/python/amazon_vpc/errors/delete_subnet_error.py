from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteSubnetErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteSubnetError:
    def map(self, status_code: int, content: bytes) -> DeleteSubnetErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_subnet_error_mapper: Final[ErrorMapper[DeleteSubnetErrorBody]] = _DeleteSubnetError()
