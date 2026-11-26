from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

InstallExtensionErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _InstallExtensionError:
    def map(self, status_code: int, content: bytes) -> InstallExtensionErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


install_extension_error_mapper: Final[ErrorMapper[InstallExtensionErrorBody]] = _InstallExtensionError()
