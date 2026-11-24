from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.validate_error_json import ValidateErrorJson

TriggerRunErrorBody: TypeAlias = ValidateErrorJson | RawError


@dataclass(frozen=True, slots=True)
class _TriggerRunError:
    def map(self, status_code: int, content: bytes) -> TriggerRunErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case 422:
                return decode_json[ValidateErrorJson](content)
            case _:
                return RawError(status_code, content)


trigger_run_error_mapper: Final[ErrorMapper[TriggerRunErrorBody]] = _TriggerRunError()
