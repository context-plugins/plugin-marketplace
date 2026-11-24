from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.cannot_delete_last_item_error_response import CannotDeleteLastItemErrorResponse
from ..models.not_found_error_response import NotFoundErrorResponse

SdkKeysControllerInvalidateErrorBody: TypeAlias = NotFoundErrorResponse | CannotDeleteLastItemErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _SdkKeysControllerInvalidateError:
    def map(self, status_code: int, content: bytes) -> SdkKeysControllerInvalidateErrorBody:
        match status_code:
            case 401 | 403:
                return RawError(status_code, content)
            case 404:
                return decode_json[NotFoundErrorResponse](content)
            case 405:
                return decode_json[CannotDeleteLastItemErrorResponse](content)
            case _:
                return RawError(status_code, content)


sdk_keys_controller_invalidate_error_mapper: Final[
    ErrorMapper[SdkKeysControllerInvalidateErrorBody]
] = _SdkKeysControllerInvalidateError()
