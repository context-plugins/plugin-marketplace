from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeInterconnectsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeInterconnectsError:
    def map(self, status_code: int, content: bytes) -> DescribeInterconnectsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_interconnects_error_mapper: Final[ErrorMapper[DescribeInterconnectsErrorBody]] = _DescribeInterconnectsError()
