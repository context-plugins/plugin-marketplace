from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListCloudflowsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListCloudflowsError:
    def map(self, status_code: int, content: bytes) -> ListCloudflowsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_cloudflows_error_mapper: Final[ErrorMapper[ListCloudflowsErrorBody]] = _ListCloudflowsError()
