from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.allocation_delete_validation import AllocationDeleteValidation
from ..models.error import Error

DeleteAllocationErrorBody: TypeAlias = Error | list[AllocationDeleteValidation] | RawError


@dataclass(frozen=True, slots=True)
class _DeleteAllocationError:
    def map(self, status_code: int, content: bytes) -> DeleteAllocationErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case 409:
                return decode_json[list[AllocationDeleteValidation]](content)
            case _:
                return RawError(status_code, content)


delete_allocation_error_mapper: Final[ErrorMapper[DeleteAllocationErrorBody]] = _DeleteAllocationError()
