from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteLabelErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteLabelError:
    def map(self, status_code: int, content: bytes) -> DeleteLabelErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_label_error_mapper: Final[ErrorMapper[DeleteLabelErrorBody]] = _DeleteLabelError()
