from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_error_response import BadRequestErrorResponse
from ..models.not_found_error_response import NotFoundErrorResponse

SdkKeysControllerGenerateErrorBody: TypeAlias = BadRequestErrorResponse | NotFoundErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _SdkKeysControllerGenerateError:
    def map(self, status_code: int, content: bytes) -> SdkKeysControllerGenerateErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestErrorResponse](content)
            case 401 | 403:
                return RawError(status_code, content)
            case 404:
                return decode_json[NotFoundErrorResponse](content)
            case _:
                return RawError(status_code, content)


sdk_keys_controller_generate_error_mapper: Final[
    ErrorMapper[SdkKeysControllerGenerateErrorBody]
] = _SdkKeysControllerGenerateError()
