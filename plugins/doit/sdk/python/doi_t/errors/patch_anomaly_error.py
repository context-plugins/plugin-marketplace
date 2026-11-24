from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PatchAnomalyErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PatchAnomalyError:
    def map(self, status_code: int, content: bytes) -> PatchAnomalyErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


patch_anomaly_error_mapper: Final[ErrorMapper[PatchAnomalyErrorBody]] = _PatchAnomalyError()
