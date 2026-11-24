from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.internal_server_exception import InternalServerException
from ..models.service_quota_exceeded_exception import ServiceQuotaExceededException
from ..models.throttling_exception import ThrottlingException
from ..models.validation_exception import ValidationException

ListBotAliasesErrorBody: TypeAlias = (
    ValidationException | ServiceQuotaExceededException | ThrottlingException | InternalServerException | RawError
)


@dataclass(frozen=True, slots=True)
class _ListBotAliasesError:
    def map(self, status_code: int, content: bytes) -> ListBotAliasesErrorBody:
        match status_code:
            case 400:
                return decode_json[ValidationException](content)
            case 402:
                return decode_json[ServiceQuotaExceededException](content)
            case 429:
                return decode_json[ThrottlingException](content)
            case 500:
                return decode_json[InternalServerException](content)
            case _:
                return RawError(status_code, content)


list_bot_aliases_error_mapper: Final[ErrorMapper[ListBotAliasesErrorBody]] = _ListBotAliasesError()
