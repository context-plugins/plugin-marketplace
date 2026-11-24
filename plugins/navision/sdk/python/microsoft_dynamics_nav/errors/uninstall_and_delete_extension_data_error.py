from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

UninstallAndDeleteExtensionDataErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _UninstallAndDeleteExtensionDataError:
    def map(self, status_code: int, content: bytes) -> UninstallAndDeleteExtensionDataErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


uninstall_and_delete_extension_data_error_mapper: Final[
    ErrorMapper[UninstallAndDeleteExtensionDataErrorBody]
] = _UninstallAndDeleteExtensionDataError()
