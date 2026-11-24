from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.access_denied_exception import AccessDeniedException
from ..models.conflict_exception import ConflictException
from ..models.internal_server_exception import InternalServerException
from ..models.throttling_exception import ThrottlingException
from ..models.validation_exception import ValidationException

UpdateServiceIntegrationErrorBody: TypeAlias = (
    ValidationException
    | AccessDeniedException
    | ConflictException
    | ThrottlingException
    | InternalServerException
    | RawError
)


@dataclass(frozen=True, slots=True)
class _UpdateServiceIntegrationError:
    def map(self, status_code: int, content: bytes) -> UpdateServiceIntegrationErrorBody:
        match status_code:
            case 400:
                return decode_json[ValidationException](content)
            case 403:
                return decode_json[AccessDeniedException](content)
            case 409:
                return decode_json[ConflictException](content)
            case 429:
                return decode_json[ThrottlingException](content)
            case 500:
                return decode_json[InternalServerException](content)
            case _:
                return RawError(status_code, content)


update_service_integration_error_mapper: Final[
    ErrorMapper[UpdateServiceIntegrationErrorBody]
] = _UpdateServiceIntegrationError()
