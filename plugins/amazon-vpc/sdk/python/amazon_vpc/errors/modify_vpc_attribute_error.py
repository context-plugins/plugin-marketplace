from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ModifyVpcAttributeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ModifyVpcAttributeError:
    def map(self, status_code: int, content: bytes) -> ModifyVpcAttributeErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


modify_vpc_attribute_error_mapper: Final[ErrorMapper[ModifyVpcAttributeErrorBody]] = _ModifyVpcAttributeError()
