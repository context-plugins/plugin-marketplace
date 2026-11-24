from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.access_denied_exception import AccessDeniedException
from ..models.internal_server_exception import InternalServerException
from ..models.request_throttled_exception import RequestThrottledException
from ..models.resource_not_found_exception import ResourceNotFoundException
from ..models.service_quota_exceeded_exception import ServiceQuotaExceededException

ListChangedBlocksErrorBody: TypeAlias = (
    RequestThrottledException
    | ServiceQuotaExceededException
    | AccessDeniedException
    | ResourceNotFoundException
    | InternalServerException
    | RawError
)


@dataclass(frozen=True, slots=True)
class _ListChangedBlocksError:
    def map(self, status_code: int, content: bytes) -> ListChangedBlocksErrorBody:
        match status_code:
            case 400:
                return decode_json[RequestThrottledException](content)
            case 402:
                return decode_json[ServiceQuotaExceededException](content)
            case 403:
                return decode_json[AccessDeniedException](content)
            case 404:
                return decode_json[ResourceNotFoundException](content)
            case 500:
                return decode_json[InternalServerException](content)
            case _:
                return RawError(status_code, content)


list_changed_blocks_error_mapper: Final[ErrorMapper[ListChangedBlocksErrorBody]] = _ListChangedBlocksError()
