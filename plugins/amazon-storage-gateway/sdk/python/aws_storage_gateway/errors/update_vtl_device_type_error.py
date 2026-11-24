from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateVtlDeviceTypeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateVtlDeviceTypeError:
    def map(self, status_code: int, content: bytes) -> UpdateVtlDeviceTypeErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_vtl_device_type_error_mapper: Final[ErrorMapper[UpdateVtlDeviceTypeErrorBody]] = _UpdateVtlDeviceTypeError()
