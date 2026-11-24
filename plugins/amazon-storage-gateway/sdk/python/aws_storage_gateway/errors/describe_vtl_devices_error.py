from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeVtlDevicesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeVtlDevicesError:
    def map(self, status_code: int, content: bytes) -> DescribeVtlDevicesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_vtl_devices_error_mapper: Final[ErrorMapper[DescribeVtlDevicesErrorBody]] = _DescribeVtlDevicesError()
