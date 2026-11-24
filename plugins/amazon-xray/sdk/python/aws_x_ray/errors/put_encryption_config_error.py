from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.invalid_request_exception import InvalidRequestException
from ..models.throttled_exception import ThrottledException

PutEncryptionConfigErrorBody: TypeAlias = InvalidRequestException | ThrottledException | RawError


@dataclass(frozen=True, slots=True)
class _PutEncryptionConfigError:
    def map(self, status_code: int, content: bytes) -> PutEncryptionConfigErrorBody:
        match status_code:
            case 400:
                return decode_json[InvalidRequestException](content)
            case 429:
                return decode_json[ThrottledException](content)
            case _:
                return RawError(status_code, content)


put_encryption_config_error_mapper: Final[ErrorMapper[PutEncryptionConfigErrorBody]] = _PutEncryptionConfigError()
