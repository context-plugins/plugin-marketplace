from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CustomPropertiesControllerRemoveErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CustomPropertiesControllerRemoveError:
    def map(self, status_code: int, content: bytes) -> CustomPropertiesControllerRemoveErrorBody:
        match status_code:
            case 401 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


custom_properties_controller_remove_error_mapper: Final[
    ErrorMapper[CustomPropertiesControllerRemoveErrorBody]
] = _CustomPropertiesControllerRemoveError()
